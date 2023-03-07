import React from "react";
import "./DashboardRightData.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import TaskScroll from "../../assets/Tasks scroll through.png";
import DataCard from "../DataCard/DataCard";

function DashboardRightData() {
  return (
    <>
      <div className="DashboardHomeRight res_margin">
        <NavbarTop />

        <p className="dashboard-title interFamily">Dashboard</p>

        <div
          style={{ height: "fit-content" }}
          className="dashboard-empty px-3 d-flex align-items-center flex-column"
        >
          <div className="dash-favourites">
            <p className="sub-heading robotoFamily my-3">Favorites</p>
            <div className="card_grid">
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
            </div>
          </div>
          <div className="dash-staff-favourites">
            <p className="sub-heading robotoFamily my-3">Staff Favorites</p>
            <div className="card_grid">
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
              <DataCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardRightData;
