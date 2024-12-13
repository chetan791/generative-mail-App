import React, { useContext } from "react";
import MyContext from "../Context/MyContext";
import { useNavigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { value, setValue } = useContext(MyContext);
  const navigate = useNavigate();

  if (!value.isAuth) {
    navigate("/");
  } else {
    return <div>{children}</div>;
  }
};
