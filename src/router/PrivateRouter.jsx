import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const PrivateRouter = () => {
  const user = false;
  return <div>{user ? <Outlet /> : <Register />}</div>;
};

export default PrivateRouter;
