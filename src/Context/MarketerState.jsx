import React from "react";
import MarketerContext from "./MarketerContext";
import axios from "axios";

function MarketerState(props) {
  const BASE_URL = "http://www.marketseer.ai";

  // Following function is used to login the user:

  const Login = async (username, password) => {
    try {
      let response = await axios.post(`${BASE_URL}/seer/token/`, {
        username,
        password,
      });

      console.log("Login Data: ", response);
      
      
      return {
        success:true,
        result: response?.data
      }

    } catch (error) {
      
      return {
        success:false
      }
    }
  };

  // Following function is used to sign up the user:

  const SignUp = async (username, password, mobile, email, referral) => {
    try {
      let response = await axios.post(`${BASE_URL}/seer/api/create-user`, {
        username,
        password,
        mobile,
        email,
        referral,
      });

      if (response?.status === 200) {
        return {
          success: true,
          result: response?.data,
        };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MarketerContext.Provider value={{ SignUp, Login }}>
        {props.children}
      </MarketerContext.Provider>
    </>
  );
}

export default MarketerState;
