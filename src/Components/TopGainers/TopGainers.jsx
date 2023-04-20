import React, { useCallback, useContext, useEffect, useState } from "react";
import "./TopGainers.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Search from "../../assets/Search Icon.png";
import Csv from "../../assets/Export Icon.png";
import InfluncerTable from "../InfluncerTable/InfluncerTable";
import TopGainerTable from "../InfluncerTable/TopGainerTable";
import MarketerContext from "../../Context/MarketerContext";
import { CSVLink } from "react-csv";

function TopGainers() {
  const { topGainer, downloadCSV, pageNo, expired } =
    useContext(MarketerContext);
  const [csvFetchedData, setCsvFetchedData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_PER_PAGE = 10; // set the number of items per page

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getData(pageNumber, ITEMS_PER_PAGE);
  };

  useEffect(() => {
    getData(currentPage, ITEMS_PER_PAGE);

    downloadCSV().then((data) => {
      // console.log("CSV data for download: ", data);
      setCsvFetchedData(data?.data?.data);
    });
  }, []);

  const getData = (page, limit) => {
    topGainer(page, limit)
      .then((data) => {
        // console.log(
        //   "Showing TopGainer data for page: ",
        //   currentPage + "\n",
        //   data?.data
        // );
        setTotalPages(data?.data?.pages);
        setTotalItems(data?.data?.total);

        // setInfluncerData(data?.data);
      })
      .catch((error) => {
        // console.log(error);
      });
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

  const renderNavbar = useCallback(() => {
    return <NavbarTop />;
  }, []);

  return (
    <>
      <div
        style={{
          Height: "100vh",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
        className="DashboardHomeRight res_margin "
      >
        {/* <NavbarTop /> */}
        {renderNavbar()}

        {!expired ? (
          <>
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
                <CSVLink data={csvFetchedData}>Export to CSV</CSVLink>
              </button>
            </div>
            <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
              <div
                style={{ paddingBottom: "2px" }}
                className="table-parent pt-0"
              >
                {/* <div className="table-search d-flex justify-content-between align-items-center">
              <div className="table-input">
                <input
                  className="table-input-tag"
                  placeholder="Search...."
                  type="text"
                />
                <img src={Search} alt="" />
              </div>
            </div> */}
                {/* <InfluncerTable /> */}
                <TopGainerTable currentPage={currentPage} />

                <div className="d-flex justify-content-center align-items-center my-5">
                  <nav
                    style={{ color: "#324558" }}
                    aria-label="Page pagination-bottom navigation example my-5"
                  >
                    <ul style={{ gap: "10px" }} class="pagination">
                      {}
                      <li class="page-item">
                        <a class="page-link" onClick={handlePrevious}>
                          Prev
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link color-white"
                          onClick={() => handlePageChange(currentPage)}
                        >
                          {currentPage}
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          onClick={() =>
                            handlePageChange(
                              currentPage >= totalPages ? 1 : currentPage + 1
                            )
                          }
                        >
                          {currentPage >= totalPages ? 1 : currentPage + 1}
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          onClick={() =>
                            handlePageChange(
                              currentPage >= totalPages ? 2 : currentPage + 2
                            )
                          }
                        >
                          {currentPage >= totalPages ? 2 : currentPage + 2}
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link">...</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          onClick={() => handlePageChange(totalPages)}
                        >
                          {totalPages}
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" onClick={handleNext}>
                          Next
                        </a>
                      </li>
                    </ul>
                    {/* <ul className="pagination">
                  {pageNumbers.map((pageNumber) => (
                    <li
                      key={pageNumber}
                      className={`page-item ${
                        pageNumber === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                </ul> */}
                  </nav>
                </div>
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

export default TopGainers;
