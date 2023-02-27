import React from "react";
import DashboardRight from "../Components/DashboardRight/DashboardRight";
import DashboardHome from "../Components/DashboardHome/DashboardHome";
import "./Pages.css";

function DashHomePage() {
  return (
    <>
      <div className="DashboardHomePage">
        <DashboardRight />
        <DashboardHome />
      </div>
    </>
  );
}

export default DashHomePage;
