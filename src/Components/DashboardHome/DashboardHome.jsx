import React from "react";
import "./DashboardHome.css";
import SearchIcon from "../../assets/Vector.png";
import User from "../../assets/user-4 1.png";
import NavbarTop from "../NavbarTop/NavbarTop";
import TaskScroll from "../../assets/Tasks scroll through.png";

function DashboardHome() {
  return (
    <>
      <div style={{ minHeight: "100vh" }} className="DashboardHomeRight res_margin">
        <NavbarTop />

        <p className="dashboard-title interFamily">Dashboard</p>

        <div className="dashboard-empty d-flex justify-content-center align-items-center flex-column">
          <img className="empty-image" src={TaskScroll} alt="task scroll" />

          <p className="robotoFamily empty-text mx-4">
            Your favorite assets will appear here. To being search for a ticker
            on top.
          </p>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
