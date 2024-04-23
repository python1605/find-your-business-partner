import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import HomeLaout from "../components/homeLayout/HomeLaout";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="" element={<HomeLaout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
