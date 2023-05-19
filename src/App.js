import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import MarketerState from "./Context/MarketerState";
import DashHomePage from "./Pages/DashHomePage";
import DashboardData from "./Components/DashboardData/DashboardData";
import DashAnalyze from "./Pages/DashAnalyze";
import InfluncerPage from "./Pages/InfluncerPage";
import TopGainer from "./Pages/TopGainer";
import SettingPage from "./Pages/SettingPage";
import Forgot from "./Components/Forgot/Forgot";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginMsg from "./Components/Login/LoginMsg";
import Test from "./Pages/Test";
const BASE_URL = "http://www.marketseer.ai";

function App() {
  // Handle toke expiration:

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Perform token refresh logic here, e.g. fetching a new token from the server
      // console.log("Token has expired, refreshing...");
      genRefreshToken().then((data) => {
        // console.log("RefreshToken response: ", data?.data);
        localStorage.setItem("token", data?.data?.access);
        localStorage.setItem("refresh_token", data?.data?.refresh);
      });

      toast.warn("Your token has expired", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 15 * 60 * 1000); // Set timeout for 15 minutes

    return () => clearTimeout(timeoutId);
  }, []);

  const genRefreshToken = async () => {
    try {
      let response = await axios.post(`${BASE_URL}/seer/token/refresh/`, {
        refresh: localStorage.getItem("refresh_token"),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MarketerState>
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <Routes>
            <Route path="/" element={<DashboardData />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/login/:msg" element={<LoginMsg />}></Route>
            <Route path="/forgot" element={<Forgot />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/dash-placeholder" element={<DashHomePage />}></Route>
            <Route path="/analyze/:ticket" element={<DashAnalyze />}></Route>
            <Route
              path="/influncer/:ticket/:exchange"
              element={<InfluncerPage />}
            ></Route>
            <Route path="/top-gainer" element={<TopGainer />}></Route>
            <Route path="/setting" element={<SettingPage />}></Route>
            {/* <Route path="/test" element={<Test />}></Route> */}
            <Route
              path="/terms-condition"
              element={<TermsAndCondition />}
            ></Route>
          </Routes>
        </Router>
      </MarketerState>
    </>
  );
}

export default App;
