import React, { useEffect, useState } from "react";
import LoginLeft from "../LoginLeft";
import LoginRight from "../LoginRight/LoginRight";
import { useNavigate } from "react-router-dom";

function Login() {
  // const Navigate = useNavigate();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   let rememberMe = localStorage.getItem("remember");

  //   if (JSON.parse(rememberMe)) {
  //     Navigate("/");
  //   } else {
  //     setLoading(true);
  //   }
  // }, []);

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
