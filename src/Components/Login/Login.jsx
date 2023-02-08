import React from "react";
import LoginLeft from "../LoginLeft";
import LoginRight from "../LoginRight/LoginRight";

function Login() {
  return (
    <>
      <div className="flex login-page items-center flex-wrap ">
        <LoginLeft />
        <LoginRight />
      </div>
    </>
  );
}

export default Login;
