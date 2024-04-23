import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./register/Login";
import SignUp from "./register/SignUp";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
