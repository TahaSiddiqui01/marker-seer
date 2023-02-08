import React, { useState } from "react";
import { Link } from "react-router-dom";
import Gmail from "../../assets/Gmail logo.png";
import Lock from "../../assets/Lock.png";
import Invisible from "../../assets/Invisible.png";
import { useContext } from "react";
import MarketerContext from "../../Context/MarketerContext";
import { useEffect } from "react";
import "axios";
import "./LoginRight.css";

import swal from "sweetalert";

function LoginRight() {
  const { Login } = useContext(MarketerContext);
  const [error, setError] = useState("");

  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = () => {
    if (inputData?.username === "" || inputData?.password === "") {
      setError("Input fields can't be empty");
      return;
    }

    //username, password, mobile, email, referral
    Login(inputData?.username, inputData?.password).then((data) => {
      if (data?.success) {
        swal({
          title: "Successfully login",
          icon: "success",
        });
        setInputData({
          username: "",
          password: "",
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
      <div className="w-2/4  flex  min-w-fit items-center h-screen flex-col max-[960px]:h-fit">
        <p className="text-[25px] welcome-heading font-medium mt-6">
          Welcome back!
        </p>
        <p className="text-[#9F9F9F]">Sign in to your account</p>

        <div className="mt-24 flex flex-wrap flex-col m">
          <p className="font-bold mt-6 text-red-600 text-center"> {error} </p>
          <div className="h-[79px]">
            <input
              className="custom-input shadow-[rgba(0, 0, 0, 0.25)] focus-visible:border-transparent"
              placeholder="Username"
              type="text"
              name="username"
              value={inputData?.username}
              onChange={handleOnChange}
            />
            <img className="input-logo" src={Gmail} alt="" />
          </div>
          <div className="h-[79px]">
            <input
              className="custom-input shadow-[rgba(0, 0, 0, 0.25)] focus-visible:border-transparent"
              placeholder="Password"
              type="password"
              name="password"
              value={inputData?.password}
              onChange={handleOnChange}
            />
            <img className="input-logo" src={Lock} alt="" />
            <img className="input-logo-right" src={Invisible} alt="" />
          </div>
        </div>
        <div className="flex max-w-[389px]  max-[370px]:text-sm max-[370px]:px-10 w-full text-[#9F9F9F] justify-between  flex-wrap">
          <div className="flex justify-center  items-center">
            <input
              className="mr-2"
              type="checkbox"
              name="Remember"
              id="rem-1"
            />
            <label htmlFor="rem1 ">Remember me</label>
          </div>
          <Link to="/forgot ">Forgot password</Link>
        </div>

        <button onClick={handleSignIn} className="btn-login medium-button">
          SIGN IN
        </button>
        <p className="text-[#9F9F9F]">
          Don’t have an account?{" "}
          <Link className="font-bold text-[#1994A1] " to="/sign-up">
            Create
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginRight;
