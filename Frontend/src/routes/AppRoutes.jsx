import React from "react";
import PublicRoute from "./PublicRoute";
import HomeRoute from "./HomeRoute";
import { ToastContainer } from "react-toastify";

const AppRoutes = () => {
  return (
    <>
      <PublicRoute />
      <HomeRoute />
      <ToastContainer />
    </>
  );
};

export default AppRoutes;
