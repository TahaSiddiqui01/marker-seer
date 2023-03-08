import React, { useState } from "react";
import Gmail from "../../assets/Gmail logo.png";
import Lock from "../../assets/Lock.png";
import Referral from "../../assets/Group.png";
import Male from "../../assets/Male User.png";
import Invisible from "../../assets/Invisible.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MarketerContext from "../../Context/MarketerContext";
import swal from "sweetalert";
import "./SignUpRight.css";

function SignUpRight() {
  const { SignUp } = useContext(MarketerContext);
  const Navigate = useNavigate();

  const [error, setError] = useState("");

  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    referral: "",
  });

  const handleSignup = () => {
    //username, password, mobile, email, referral

    if (
      inputData?.username === "" ||
      inputData?.password === "" ||
      inputData?.mobile === "" ||
      inputData?.email === "" ||
      inputData?.referral === ""
    ) {
      setError("Input fields can't be empty");
      return;
    }
    SignUp(
      inputData?.username,
      inputData?.password,
      inputData?.mobile,
      inputData?.email,
      inputData?.referral
    ).then((data) => {
      if (data?.result?.description || !data?.success) {
        console.log("It it wrong");
        setError(data?.result?.description);
      } else {
        Navigate("/login");
        console.log("data result: ", data?.result);
        swal({
          title: "successfully signup",
          icon: "success",
        });
        setError("");
        setInputData({
          username: "",
          email: "",
          password: "",
          mobile: "",
          referral: "",
        });
      }
    });
  };

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-2/4 right_sec flex  min-w-fit items-center  flex-col max-[960px]:h-fit">
        <p className="text-[25px] welcome-heading font-medium mt-6">Hello!</p>
        <p className="text-[#9F9F9F]">Create an account </p>

        <p className="font-bold mt-6 text-red-600"> {error} </p>

        <div className=" flex flex-wrap flex-col m">
          <div className="h-[79px]">
            <input
              className="custom-input shadow-[rgba(0, 0, 0, 0.25)] focus-visible:border-transparent"
              placeholder="Username"
              type="text"
              name="username"
              value={inputData?.username}
              onChange={handleOnChange}
            />
            <img className="input-logo" src={Male} alt="" />
          </div>
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
            <img className="input-logo-right" src={Invisible} alt="eye" />
          </div>
          <div className="h-[79px]">
            <input
              className="custom-input shadow-[rgba(0, 0, 0, 0.25)] focus-visible:border-transparent"
              placeholder="Mobile"
              type="text"
              name="mobile"
              value={inputData?.mobile}
              onChange={handleOnChange}
            />
            <img className="input-logo" src={Lock} alt="" />
            <img className="input-logo-right" src={Invisible} alt="" />
          </div>
          <div className="h-[79px]">
            <input
              className="custom-input shadow-[rgba(0, 0, 0, 0.25)] focus-visible:border-transparent"
              placeholder="Referral Code"
              type="text"
              name="referral"
              value={inputData?.referral}
              onChange={handleOnChange}
            />
            <img className="input-logo" src={Referral} alt="" />
          </div>
        </div>

        <p className="text-[#9F9F9F] px-2 my-2">
          <input type="checkbox" /> <span>I read and agree to</span>
          <Link className="font-bold mx-2 text-[#1994a1]" to="/">
            terms and conditions
          </Link>
        </p>

        <button
          onClick={handleSignup}
          className="btn-signup my-4 medium-button"
        >
          Create Account
        </button>
        <p className="text-[#9F9F9F]">
          Already have an account?{" "}
          <Link className="font-bold text-[#1994a1]" to="/">
            SIGN IN
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUpRight;
