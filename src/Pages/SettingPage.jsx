import React from "react";
import DashboardRight from "../Components/DashboardRight/DashboardRight";
import DashboardHome from "../Components/DashboardHome/DashboardHome";
import SettingCompo from "../Components/SettingCompo/SettingCompo";

function SettingPage() {

  // Created

  return (
    <>
      <div
        style={{ minHeight: "100%", maxHeight: "fit-content" }}
        className="DashboardHomePage"
      >
        <DashboardRight />
        <SettingCompo />
      </div>
    </>
  );
}

export default SettingPage;
