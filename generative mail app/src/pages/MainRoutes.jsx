import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { ChatPage } from "./ChatPage";
import { PrivateRoutes } from "../Components/PrivateRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/chat"
        element={
          <PrivateRoutes>
            <ChatPage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
