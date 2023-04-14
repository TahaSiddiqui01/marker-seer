import React, { useContext, useEffect, useState } from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Search from "../../assets/Search Icon.png";
import Csv from "../../assets/Export Icon.png";
import "./InfluncerRightCompo.css";
import InfluncerTable from "../InfluncerTable/InfluncerTable";
import MarketerContext from "../../Context/MarketerContext";
import { useParams } from "react-router-dom";
import { CSVLink } from "react-csv";

function InfluncerRightCompo() {
  const { ticket } = useParams();
  const { getInfluncer, exportToCSV } = useContext(MarketerContext);
  const [influncerData, setInfluncerData] = useState([]);
  const [CSVData, setCSVData] = useState([]);

  useEffect(() => {
    getInfluncer(ticket, 10)
      .then((data) => {
        console.log("Influncer Top data: ", data?.data?.data);
        setInfluncerData(data?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });

    exportToCSV().then((data) => {
      console.log("Influncer CSV Data: ", data);
      setCSVData(data?.data?.data);
    });
  }, []);

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="DashboardHomeRight res_margin"
      >
        <NavbarTop />

        <div className="d-flex flex-wrap justify-content-start align-items-center">
          <p
            className="dashboard-title influncer-title interFamily py-0"
            style={{
              borderRight: "1px solid #324558",
              paddingRight: "1.2rem",
              marginRight: "1.2rem",
            }}
          >
            Influencers
          </p>
          <span className="gain-btn influner-top-btn">
            {influncerData?.length > 0 ? influncerData[0]?.ticker : ""}
          </span>
          <div className="d-flex influncer-coin-heading jusitfy-content-center align-items-center ">
            <span
              style={{ color: "rgba(50, 69, 88, 0.7)" }}
              className="interFamily mx-3 "
            >
              {influncerData?.length > 0 ? influncerData[0]?.name : ""}
            </span>
            <img src={Star} alt="star" />
          </div>
        </div>

        <div
          style={{ paddingBottom: "2px" }}
          className="table-parent influncer-table-parent pt-0"
        >
          <div className="table-search d-flex justify-content-end align-items-center flex-wrap">
            {/* <div className="table-input">
              <input
                className="table-input-tag"
                placeholder="Search...."
                type="text"
              />
              <img src={Search} alt="" />
            </div> */}


            {
              CSVData?.length > 0 ? 
              <button
                style={{ margin: "24px" }}
                className="csv-btn robotoFamily d-flex justify-content-center align-items-center py-1 px-3"
              >
                <img className="m-2" src={Csv} alt="csv" /> 
  
                <CSVLink data={CSVData}>Export to CSV</CSVLink>
              </button> : 
            <button
              style={{ margin: "24px" }}
              className="csv-btn robotoFamily d-flex justify-content-center align-items-center py-1 px-3"
            >
              <img className="m-2" src={Csv} alt="csv" /> 
                Export to CSV
            </button>
            }


          </div>
          <InfluncerTable />

          <div className="d-flex justify-content-center align-items-center flex-wrap mx-1 my-5">
            <nav
              style={{ color: "#324558" }}
              aria-label="Page flex-wrap pagination-bottom navigation example my-5"
            >
              <ul
                style={{ gap: "10px" }}
                class="pagination d-flex justify-content-centera align-items-center flex-wrap"
              >
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
