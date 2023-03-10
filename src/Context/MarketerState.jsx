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

      localStorage.setItem("token", response?.data?.access);

      return {
        success: true,
        result: response?.data,
      };
    } catch (error) {
      return {
        success: false,
      };
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

      console.log("sign up data: ", response);

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

  // Following function is used to get the user data:

  const getUserData = async () => {
    try {
      let token = localStorage.getItem("token");

      let response = await axios.get(`${BASE_URL}/seer/api/user`, {
        headers: {
          "Content-Type": "application",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to get the user favourites:

  const getFavourites = async () => {
    try {
      let token = localStorage.getItem("token");
      let response = await axios.get(`${BASE_URL}/seer/api/favorites`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to get the Search ticker:

  const getFetchTicker = async (query) => {
    try {
      let token = localStorage.getItem("token");
      let response = await axios.get(
        `${BASE_URL}/seer/api/tickers?query=${query} `,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // Following function is used to get the analyze data:

  const getAnalyze = async (ticker) => {
    try {
      let token = localStorage.getItem("token");
      let response = await axios.get(
        `${BASE_URL}/seer/api/tickerdetails?ticker=${"APPL"}&expand=true&days=30/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to add favourites:

  const addToFavourites = async (ticker, exchange) => {
    try {
      let token = localStorage.getItem("token");

      let response = await axios.post(
        `${BASE_URL}/seer/api/favorites`,
        {
          ticker,
          exchange,
        },
        {
          headers: {
            "Content-type": "application/json",
            Autorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // Following function is used to delete the favourites:

  const deleteFavourite = async (ticker, exchange) => {
    try {
      let token = localStorage.getItem("token");

      let response = await axios.delete(
        `${BASE_URL}/seer/api/favorites`,
        {
          ticker,
          exchange,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to get influncer:

  const getInfluncer = async (ticker, page) => {
    try {
      let token = localStorage.getItem("token");

      let response = await axios.get(
        `${BASE_URL}/seer/api/influencers?ticker=${ticker}&page=${page}&limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to export to CSV:

  const exportToCSV = async (ticker) => {
    try {
      let response = await axios.get(
        `${BASE_URL}/seer/api/influencers?ticker=${ticker}&type=csv`
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to logout the user:

  const logoutTheUser = async (refresh_token) => {
    try {
      let token = localStorage.getItem("token");

      let response = await axios.post(
        `${BASE_URL}/seer/api/logout`,
        {
          refresh_token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MarketerContext.Provider
        value={{
          SignUp,
          Login,
          getUserData,
          getFavourites,
          getFetchTicker,
          getAnalyze,
          addToFavourites,
          getInfluncer,
          logoutTheUser,
          exportToCSV,
        }}
      >
        {props.children}
      </MarketerContext.Provider>
    </>
  );
}

export default MarketerState;
