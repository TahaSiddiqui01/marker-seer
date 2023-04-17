import React from "react";
import DashboardRight from "../DashboardRight/DashboardRight";
import DashboardHome from "../DashboardHome/DashboardHome";
import DashboardRightData from "../DashboardRightData/DashboardRightData";

function DashboardData() {
  

  return (
    <>
      <div style={{ height: "100%" }} className="DashboardHomePage">
        <DashboardRight />
        <DashboardRightData />
      </div>
    </>
  );
}

export default DashboardData;
