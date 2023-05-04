import React, { useCallback, useContext, useEffect, useState } from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Search from "../../assets/Search Icon.png";
import Csv from "../../assets/Export Icon.png";
import "./InfluncerRightCompo.css";
import InfluncerTable from "../InfluncerTable/InfluncerTable";
import MarketerContext from "../../Context/MarketerContext";
import { useParams, useLocation } from "react-router-dom";
import { CSVLink } from "react-csv";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function InfluncerRightCompo() {
  const { ticket, exchange } = useParams();
  const location = useLocation();

  const { getInfluncer, exportToCSV, expired, downloadCSV } =
    useContext(MarketerContext);
  const [influncerData, setInfluncerData] = useState([]);
  const [CSVData, setCSVData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_PER_PAGE = 10; // set the number of items per page
  const [mappingPages, setMappingPages] = useState([]);

  useEffect(() => {
    getInfluncer(ticket, 10)
      .then((data) => {
        setTotalPages(data?.data?.pages);
        setTotalItems(data?.data?.total);
        setInfluncerData(data?.data?.data);

        let pagesArr = [];
        for (let i = 1; i <= data?.data?.pages; i++) {
          pagesArr.push(i);
        }
        setMappingPages(pagesArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderNavbar = useCallback(() => {
    return <NavbarTop />;
  }, []);

  useEffect(() => {
    exportToCSV(ticket).then((data) => {
      setCSVData(data?.data);
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getInfluncer(ticket, pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="DashboardHomeRight res_margin"
      >
        {/* <NavbarTop /> */}
        {renderNavbar()}

        {!expired ? (
          <>
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
                {/* {influncerData?.length > 0 ? influncerData[0]?.ticker : ""} */}
                {ticket}
              </span>
              <div className="d-flex influncer-coin-heading jusitfy-content-center align-items-center ">
                <span
                  style={{ color: "rgba(50, 69, 88, 0.7)" }}
                  className="interFamily mx-3 "
                >
                  {exchange}
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

                {CSVData?.length > 0 ? (
                  <button
                    style={{ margin: "24px" }}
                    className="csv-btn robotoFamily d-flex justify-content-center align-items-center py-1 px-3"
                  >
                    <img className="m-2" src={Csv} alt="csv" />

                    <CSVLink data={CSVData}>Export to CSV</CSVLink>
                  </button>
                ) : (
                  <button
                    style={{ margin: "24px" }}
                    className="csv-btn robotoFamily d-flex justify-content-center align-items-center py-1 px-3"
                  >
                    <img className="m-2" src={Csv} alt="csv" />
                    Export to CSV
                  </button>
                )}
              </div>
              <InfluncerTable currentPage={currentPage} />

              <div className="d-flex justify-content-center align-items-center my-5">
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, value) => setCurrentPage(value)}
                  />
                </Stack>
              </div>
            </div>
          </>
        ) : (
          <h2
            style={{
              margin: "3rem",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Your subscription has expired
          </h2>
        )}
      </div>
    </>
  );
}

export default InfluncerRightCompo;
