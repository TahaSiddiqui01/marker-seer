import React, { useEffect, useState } from "react";
import LoginLeft from "../LoginLeft";
import LoginRight from "../LoginRight/LoginRight";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom"


function LoginMsg() {

    const {msg} = useParams();

  return (
    <>
        <div className="flex login-page items-center flex-wrap ">
          <LoginLeft />
          <LoginRight msg={msg} />
        </div>
    </>
  );
}

export default LoginMsg;
