import React from "react";
import { Route, Routes } from "react-router-dom";

function PrivateRoute() {
  return (
    <>
      <Routes>
        <Route path="/user">
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default PrivateRoute;
