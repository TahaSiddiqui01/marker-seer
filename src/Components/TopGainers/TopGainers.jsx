import React from "react";
import "./TopGainers.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Search from "../../assets/Search Icon.png";
import Csv from "../../assets/Export Icon.png";
import InfluncerTable from "../InfluncerTable/InfluncerTable";
import TopGainerTable from "../InfluncerTable/TopGainerTable";

function TopGainers() {
  return (
    <>
      <div style={{ minHeight: "100vh" }} className="DashboardHomeRight res_margin">
        <NavbarTop />

        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <p
            className="dashboard-title interFamily py-0"
            style={{
              paddingRight: "1.2rem",
              marginRight: "1.2rem",
            }}
          >
            Top Gainers
          </p>

          <button
            style={{ margin: "24px", backgroundColor: "#FFFFFF" }}
            className="csv-btn csv-wrap robotoFamily d-flex justify-content-center flex-wrap align-items-center py-1 px-3"
          >
            <img className="m-2" src={Csv} alt="csv" />
            Export to CSV
          </button>
        </div>

        <div style={{ paddingBottom: "2px" }} className="table-parent">
          <div className="table-search d-flex justify-content-between align-items-center">
            <div className="table-input">
              <input className="table-input-tag" placeholder="Search...." type="text" />
              <img src={Search} alt="" />
            </div>
          </div>
          {/* <InfluncerTable /> */}
          <TopGainerTable/>

          <div className="d-flex justify-content-center align-items-center my-5">
            <nav
              style={{ color: "#324558" }}
              aria-label="Page pagination-bottom navigation example my-5"
            >
              <ul style={{ gap: "10px" }} class="pagination">
                <li class="page-item">
                  <a class="page-link">Prev</a>
                </li>
                <li class="page-item">
                  <a class="page-link">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default TopGainers;
