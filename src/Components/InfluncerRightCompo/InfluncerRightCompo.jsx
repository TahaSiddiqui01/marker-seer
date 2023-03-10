import React from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Search from "../../assets/Search Icon.png";
import Csv from "../../assets/Export Icon.png";
import "./InfluncerRightCompo.css";
import InfluncerTable from "../InfluncerTable/InfluncerTable";

function InfluncerRightCompo() {

  

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="DashboardHomeRight res_margin"
      >
        <NavbarTop />

        <div className="d-flex flex-wrap justify-content-start align-items-center">
          <p
            className="dashboard-title interFamily py-0"
            style={{
              borderRight: "1px solid #324558",
              paddingRight: "1.2rem",
              marginRight: "1.2rem",
            }}
          >
            Influencers
          </p>
          <span className="gain-btn">APPL</span>
          <div className="d-flex jusitfy-content-center align-items-center ">
            <span
              style={{ color: "rgba(50, 69, 88, 0.7)" }}
              className="interFamily mx-3 "
            >
              Apple Inc - Nasdaq
            </span>
            <img src={Star} alt="star" />
          </div>
        </div>

        <div style={{ paddingBottom: "2px" }} className="table-parent">
          <div className="table-search d-flex justify-content-between align-items-center flex-wrap">
            <div className="table-input">
              <input className="table-input-tag" placeholder="Search...." type="text" />
              <img src={Search} alt="" />
            </div>
            <button
              style={{ margin: "24px" }}
              className="csv-btn robotoFamily d-flex justify-content-center align-items-center py-1 px-3"
            >
              <img className="m-2" src={Csv} alt="csv" />
              Export to CSV
            </button>
          </div>
          <InfluncerTable />

          <div className="d-flex justify-content-center align-items-center flex-wrap mx-1 my-5">
            <nav
              style={{ color: "#324558" }}
              aria-label="Page flex-wrap pagination-bottom navigation example my-5"
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
    </>
  );
}

export default InfluncerRightCompo;
