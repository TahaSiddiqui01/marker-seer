import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import MarketerState from "./Context/MarketerState";
import DashHomePage from "./Pages/DashHomePage";
import DashboardData from "./Components/DashboardData/DashboardData";
import DashAnalyze from "./Pages/DashAnalyze";

function App() {
  return (
    <>
      <MarketerState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/dash-placeholder" element={<DashHomePage />}></Route>
            <Route path="/dashboard" element={<DashboardData />}></Route>
            <Route path="/analyze" element={<DashAnalyze />}></Route>
          </Routes>
        </Router>
      </MarketerState>
    </>
  );
}

export default App;
