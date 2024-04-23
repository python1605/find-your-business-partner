import React from "react";
import PublicRoute from "./PublicRoute";
import HomeRoute from "./HomeRoute";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <>
      <PublicRoute />
      <HomeRoute />
      <PrivateRoute />
      <ToastContainer />
    </>
  );
};

export default AppRoutes;
