import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gmail from "../../assets/Gmail logo.png";
import Prev_arrow from "../../assets/prev_arrow.png";
import { useContext } from "react";
import MarketerContext from "../../Context/MarketerContext";
import { useEffect } from "react";
import "axios";

import swal from "sweetalert";
function ForgotRight() {
  const Navigate = useNavigate();

  const { forgotPassword } = useContext(MarketerContext);
  const [error, setError] = useState("");

  const [inputData, setInputData] = useState({
    email: "",
  });
  const handleForgot = () => {
    if (inputData?.username === "" || inputData?.password === "") {
      setError("Input fields can't be empty");
      return;
    }

    //username, password, mobile, email, referral
    forgotPassword(inputData?.email).then((data) => {
      console.log("ForgotPasswordResponse: ", data);
      if (data?.data?.data === "Temporary password sent") {
        Navigate("/login");

        swal({
          title: "Temporary password sent",
          icon: "success",
        });
        setInputData({
          email: ""
        });
        setError("");
      } else {
        swal({
          title: "Incorrect Credentials",
          icon: "error",
        });
        setError("Incorrect Credentials");
      }
    });
  };

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="w-2/4  flex  min-w-fit items-center justify-center h-screen flex-col max-[960px]:h-fit">
        <p className="text-[25px] welcome-heading font-medium mt-6">
          Forgot Password?
        </p>
        <p className="text-[#9F9F9F]">We’ll send you a temporary password</p>

        <div className="mt-8 flex flex-wrap flex-col m">
          <p className="font-bold mt-6 text-red-600 text-center"> {error} </p>

          <div className="h-[79px]">
            <input
              className="custom-input shadow-[rgba(0, 0, 0, 0.25)] focus-visible:border-transparent"
              placeholder="Email"
              type="email"
              name="email"
              value={inputData?.email}
              onChange={handleOnChange}
            />
            <img className="input-logo" src={Gmail} alt="" />
          </div>
        </div>

        <button onClick={handleForgot} className="btn-login mt-4 medium-button">
          SUBMIT
        </button>
        <p className="text-[#9F9F9F]">
          <Link className="font-bold text-[#1994A1] " to="/login">
            <span className="flex items-center justify-center">
              <img src={Prev_arrow} alt="previous " />{" "}
              <span className="mx-2"> Back to login</span>
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default ForgotRight;
