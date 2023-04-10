import React from "react";
import "./LoginLeft.css";
import Logo from "../assets/logo-1.png"

function LoginLeft() {
  return (
    <>
      <div className="w-2/4 login-image flex justify-between flex-col  h-screen">

        <img className="w-[185px] m-8" src={Logo} alt="" />
        {/* <p className="text-white heading-text text-[30px] mx-16 py-24">
          Market Seer
        </p> */}
        {/* <p className="text-white heading-text login-left-heading mb-8 text-[30px] mx-16 py-24">
          Seer the future <br /> Don't gamble it
        </p> */}
      </div>
    </>
  );
}

export default LoginLeft;
