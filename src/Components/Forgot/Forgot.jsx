import React, { useEffect, useState } from "react";
import LoginLeft from "../LoginLeft";
import LoginRight from "../LoginRight/LoginRight";
import { useNavigate } from "react-router-dom";
import ForgotRight from "./ForgotRight";

function Forgot() {
  return (
    <>
      <div className="flex login-page items-center flex-wrap ">
        <LoginLeft />
        <ForgotRight />
      </div>
    </>
  );
}

export default Forgot;
