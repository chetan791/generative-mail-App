import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";
import MyContext from "../Context/MyContext";

export const Navbar = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div className="bg-chat h-[10vh] flex justify-between px-[5%] items-center">
      <h1 className="text-2xl">
        M<span className="text-accent text-4xl">A.I</span>L
      </h1>
      <h1 onClick={() => setValue({ email: "", isAuth: false })}>
        <MdLogout />
      </h1>
    </div>
  );
};
