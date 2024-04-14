import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/publicLayout/PublicLayout";
import Login from "../register/Login";
import SignUp from "../register/SignUp";
import Home from "../home/Home";
import HomeLaout from "../components/homeLayout/HomeLaout";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="user" element={<HomeLaout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
