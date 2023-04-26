import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../../assets/Vector.png";
import User from "../../assets/Cat Profile.png";
import MarketerContext from "../../Context/MarketerContext";
import axios from "axios";
import swal from "sweetalert";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useMemo } from "react";

function NavbarTop() {
  const { getUserData, getFetchTicker } = useContext(MarketerContext);
  const [userData, setUserData] = useState({});
  const [msg, setMsg] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [searchedTicket, setsearchedTicket] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      getUserData().then((data) => {
        // console.log("UserData aaa===> ", data?.data);
        if (!data?.data) {
          Navigate("/login/Session Expired. Please login again.");
        }
        setUserData(data?.data);
      });
    } else {
      Navigate("/login");
    }
  }, []);

  const searchTicker = async (e) => {
    try {
      setMsg(e.target.value);

      if (e.target.value != "") {
        getFetchTicker(e.target.value.toUpperCase()).then((data) => {
          // console.log("Searched Ticket: ", data?.data);
          setsearchedTicket(data?.data);
        });
      }

      if (e.target.value === "") {
        setShowInput(false);
      } else {
        setShowInput(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {/* res_margin_nav */}
      <div className="robotoFamily dashboardHomeTop d-flex justify-content-between align-items-center ">
        <div
          className="d-flex justify-content-center flex-column nav_top_in_div align-items-center"
          style={{ width: "50%" }}
        >
          <div style={{ width: "100%", position: "relative" }}>
            <input
              className="dashboardHomeTopInput px-3"
              placeholder="Search Tickers"
              type="text"
              onChange={searchTicker}
              value={msg}
            />
            <img className="search-icon" src={SearchIcon} alt="" />

            <div
              className={` ${
                showInput ? "d-flex" : "d-none"
              } autocomplete py-2 px-3`}
              style={{ position: "relative" }}
            >
              <div className={` autocomplete-child `}>
                {searchedTicket?.length > 0 ? (
                  searchedTicket?.map((elem) => {
                    return (
                      <Link
                        to={`/analyze/${elem?.ticker}`}
                        onClick={() => setShowInput(false)}
                      >
                        <div className="d-flex highlight-search justify-content-beteween align-items-center">
                          <div>
                            <span className="auto-ticker">{elem?.ticker}</span>
                            <span className="desc-ticker">{elem?.name}</span>
                          </div>
                          <div className="ticker-exchange">
                            {elem?.exchange}
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <div>No Results</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginRight: "29px", marginLeft: "25px" }}
          className="d-flex justify-content-between align-items-center"
        >
          <button
            className="trail-text"
            style={{ backgroundColor: "#FFB80066", color: "#324558" }}
          >
            {userData?.subscription?.description}
          </button>

          <button
            className=" d-flex justify-content-center align-items-center "
            type="button"
          >
            <img className="useImage" src={User} alt="" />
            {userData?.username}
          </button>
          {/* <div className="dropdown">
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
