import React from "react";
import LoginLeft from "../LoginLeft";
import LoginRight from "../LoginRight/LoginRight";
import SignUpRight from "../SignUpRight/SignUpRight";

function SignUp() {
  return (
    <>
      <div className="flex signup-page items-center flex-wrap ">
        <LoginLeft />
        <SignUpRight/>
      </div>
    </>
  );
}

export default SignUp;
