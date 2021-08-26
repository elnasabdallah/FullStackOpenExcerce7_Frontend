import React from "react";
import Login from "./Login";
import Toggleable from "./Toggleable";

const LoginPage = () => {
  return (
    <Toggleable label="login">
      <Login />
    </Toggleable>
  );
};

export default LoginPage;
