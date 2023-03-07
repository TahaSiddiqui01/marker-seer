import React from "react";
import DashboardRight from "../Components/DashboardRight/DashboardRight";
import TopGainers from "../Components/TopGainers/TopGainers";

function TopGainer() {
  return (
    <div style={{ height: "100%" }} className="DashboardHomePage">
      <DashboardRight />
      <TopGainers />
    </div>
  );
}

export default TopGainer;
