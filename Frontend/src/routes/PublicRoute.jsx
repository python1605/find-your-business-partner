import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Login from "../register/Login";
import SignUp from "../register/SignUp";
import PublicLayout from "../components/publicLayout/PublicLayout";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<PublicLayout />}>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRoute;
