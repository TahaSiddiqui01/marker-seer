import React from "react";
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

function App() {
  return (
    <>
      <MarketerState>
        <Router>
          <Routes>
            <Route path="/" element={<DashboardData />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forgot" element={<Forgot />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/dash-placeholder" element={<DashHomePage />}></Route>
            <Route path="/analyze/:ticket" element={<DashAnalyze />}></Route>
            <Route
              path="/influncer/:ticket"
              element={<InfluncerPage />}
            ></Route>
            <Route path="/top-gainer" element={<TopGainer />}></Route>
            <Route path="/setting" element={<SettingPage />}></Route>
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
