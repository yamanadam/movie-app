import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  return <div>{currentUser ? <Outlet /> : <Register replace />}</div>;
};

export default PrivateRouter;
