import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../Context/MyContext";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Components/Loader";

export const Login = () => {
  // console.log(import.meta.env.VITE_BACKEND_URL);
  const navigate = useNavigate();

  const { value, setValue } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  console.log(value);

  const login = useGoogleLogin({
    flow: "auth-code",
    scope: "https://mail.google.com/ email profile",
    access_type: "offline",
    prompt: "consent",
    onSuccess: async (credentialsResponse) => {
      const { code } = credentialsResponse;
      console.log("==>", code);
      try {
        const data = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}user/login`,
          { code }
        );
        console.log(data);
        setValue({ email: data.data, isAuth: true });
      } catch (error) {
        console.error("Login Failed:", error);
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  useEffect(() => {
    if (value.isAuth) {
      navigate("/chat");
    }
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center bg-chat rounded-lg p-4 h-[50%] w-[400px]">
          <h1 className="text-3xl font-bold mb-4">Generative Mail</h1>
          <p className="w-[300px] mb-4">
            Welcome to the Generative Mail App. Please sign in with your Google
            account to continue.
          </p>
          <button
            id="signInButton"
            className="flex justify-around bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded flex items-center space-x-2 w-[300px]"
            onClick={() => login()}
          >
            <FaGoogle style={{ margin: "0" }} />
            <p className="text-white">Login with google</p>
            <FaArrowRight style={{ margin: "0" }} />
          </button>
        </div>
      )}
    </div>
  );
};
