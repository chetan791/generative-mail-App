import React, { useContext, useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { LuSend } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import MyContext from "../Context/MyContext";
import { Loader } from "../Components/Loader";
import { useNavigate } from "react-router-dom";

const AI_API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY;

export const ChatPage = () => {
  const { value, setValue } = useContext(MyContext);
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([]);
  const [show, setShow] = useState(false);
  const [emailData, setEmailData] = useState({
    email: value.email,
    recipient: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!value.isAuth) {
      navigate("/");
    }
  }, []);

  const sendPrompt = async (prompt) => {
    try {
      setLoading(true);
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${AI_API_KEY}`,
        method: "POST",
        data: {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        },
      });
      // console.log(response);
      const aiResponse = response.data.candidates[0].content.parts[0].text;

      setMessage((prev) => {
        return [
          ...prev.slice(0, prev.length - 1),
          {
            userPrompt: prev[prev.length - 1].userPrompt,
            aiResponse: aiResponse,
          },
        ];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const sendMessage = () => {
    const currPrompt = textareaRef.current.value;
    if (currPrompt === "") {
      alert("Please enter a prompt");
    } else {
      setMessage((prev) => {
        return [...prev, { userPrompt: currPrompt, aiResponse: "" }];
      });
      textareaRef.current.value = "";
      sendPrompt(currPrompt);
    }
  };

  const handleShow = (val) => {
    val ? setShow(true) : setShow(false);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      if (e.target.checkValidity()) {
        setLoading(true);
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}user/mail`,
          emailData
        );
        console.log(res);
        setEmailData({
          email: value.email,
          recipient: "",
          subject: "",
          message: "",
        });
        setLoading(false);
        setShow(false);
        alert("Email sent successfully");
      }
    } catch (error) {
      alert("Error in sending email");
      console.log(error);
    }
  };

  // Adjust the height of the textarea
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto to calculate the new height
      textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`; // Limit height to a max value (e.g., 200px)
    }
  };
  return (
    <div className="flex justify-center items-center relative px-[5%] pt-[20px]">
      <div className="w-full bg-chat h-[90vh] rounded-xl p-4 flex flex-col justify-between w-full gap-4">
        <div className="w-full rounded-xl h-auto p-4 overflow-y-auto scrollbar-hide flex flex-col">
          {message.map((message, index) => (
            <div key={index} className="w-full flex flex-col gap-2">
              <div className="flex justify-end">
                <p className="text-end max-w-[70%] bg-card p-2 bg-primary rounded text-wrap mt-2">
                  {message.userPrompt}
                </p>
              </div>
              {message.aiResponse === "" && loading ? (
                <div className="h-[40px] w-full flex justify-start items-center ">
                  <Loader />
                </div>
              ) : (
                <div className="flex justify-start gap-2 align-center border-b-[1px] border-primary pb-2">
                  <pre className="text-start p-2 rounded-md bg-card max-w-[70%] text-wrap break-words ">
                    {message.aiResponse}
                  </pre>
                  <LuSend
                    onClick={() => {
                      setEmailData((prev) => {
                        return {
                          ...prev,
                          message: message.aiResponse,
                        };
                      });
                      handleShow(true);
                    }}
                    className="text-2xl text-accent cursor-pointer  h-full "
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full border-2 border-primary rounded-xl p-2 flex items-end gap-2">
          <textarea
            ref={textareaRef}
            rows={1}
            placeholder="Ask AI"
            // style={{ border: "1px solid white" }}
            className="w-full text-foreground bg-transparent outline-none resize-none overflow-y-auto scrollbar-hide p-2"
            onInput={adjustHeight}
          ></textarea>
          <IoSend
            onClick={sendMessage}
            className="text-3xl text-accent cursor-pointer  h-full"
          />
        </div>
      </div>
      {show && (
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 ">
          {loading ? (
            <Loader />
          ) : (
            <form
              onSubmit={sendEmail}
              className="bg-chat h-auto rounded-xl p-4 flex flex-col lg:w-[50%]  w-full  gap-4 text-white"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-2xl text-start mb-4">Send email</h1>
                <IoMdClose
                  onClick={() => handleShow(false)}
                  className="cursor-pointer text-3xl border-2 border-primary p-2 rounded-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <FaUser />
                <input
                  type="email"
                  name="recipient"
                  id="recipient"
                  value={emailData.recipient}
                  onChange={handelChange}
                  placeholder="Recipient"
                  required
                  className="p-2 border-2 border-primary bg-card rounded-md w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <LuPencil />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={emailData.subject}
                  onChange={handelChange}
                  placeholder="Subject"
                  className="p-2 border-2 border-primary bg-card rounded-md w-full"
                />
              </div>
              <div className="flex gap-2">
                <MdOutlineMailOutline className="mt-2" />
                <textarea
                  name="message"
                  id="message"
                  value={emailData.message}
                  placeholder="Message"
                  required
                  onChange={handelChange}
                  className="p-2 border-2 border-primary bg-card rounded-md w-full min-h-[200px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="p-2  bg-accent text-white rounded-md w-full flex justify-center items-center gap-2"
              >
                <LuSend /> Send Email
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
