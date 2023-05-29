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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FadeLoader } from "react-spinners";

const BASE_URL = "http://www.marketseer.ai";

const override = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

function TopGainers() {
  const { topGainer, downloadCSV, pageNo, expired } =
    useContext(MarketerContext);
  const [csvFetchedData, setCsvFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_PER_PAGE = 10; // set the number of items per page
  const [mappingPages, setMappingPages] = useState([]);

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

  }, []);


  // useEffect(() => {

  //   downloadCSV().then((data) => {
  //     // console.log("CSV data for download: ", data);
  //     setCsvFetchedData(data?.data?.data);
  //   });
  // }, [])



  const handleCSVClick = () => {
    // Make the API request to retrieve CSV data from the server
    setIsLoading(true)
    fetch(`${BASE_URL}/seer/api/reportdata?report=GENERAL&type=csv`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'top_gainers.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.error('Error exporting CSV:', error);
      });
  };


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

        let pagesArr = [];
        for (let i = 1; i <= data?.data?.pages; i++) {
          pagesArr.push(i);
        }
        setMappingPages(pagesArr);
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

              {
                !isLoading ?
                  <button
                    style={{ margin: "24px", backgroundColor: "#FFFFFF" }} onClick={handleCSVClick}
                    className="csv-btn csv-wrap robotoFamily d-flex justify-content-center flex-wrap align-items-center py-1 px-3"
                  >
                    <img className="m-2" src={Csv} alt="csv" />

                    <span>Export to CSV</span>


                    {/* <CSVLink data={csvFetchedData}>Export to CSV</CSVLink> */}
                  </button> : <span style={{marginRight:"3rem"}}><FadeLoader cssOverride={override} color="#33a9c8" /></span>
              }
            </div>

            <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
              <div
                style={{ paddingBottom: "2px" }}
                className="table-parent pt-0"
              >
                <TopGainerTable currentPage={currentPage} />

                <div className="d-flex justify-content-center align-items-center my-5">
                  <Stack spacing={2}>
                    <Pagination
                      count={totalPages}
                      onChange={(e, value) => setCurrentPage(value)}
                      variant="outlined"
                      shape="rounded"
                    />
                  </Stack>
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
