import React from "react";
import DashboardRight from "../Components/DashboardRight/DashboardRight";
import InfluncerRightCompo from "../Components/InfluncerRightCompo/InfluncerRightCompo";

function InfluncerPage() {
  return (
    <>
      <div style={{ minHeight: "100%" }} className="DashboardHomePage">
        <DashboardRight />
        <InfluncerRightCompo />
      </div>
    </>
  );
}

export default InfluncerPage;
