import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import MarketerState from "./Context/MarketerState";
import DashHomePage from "./Pages/DashHomePage";

function App() {
  return (
    <>
      <MarketerState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/dash-home" element={<DashHomePage />}></Route>
          </Routes>
        </Router>
      </MarketerState>
    </>
  );
}

export default App;
