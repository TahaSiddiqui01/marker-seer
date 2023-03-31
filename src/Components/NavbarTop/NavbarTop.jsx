import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../../assets/Vector.png";
import User from "../../assets/user-4 1.png";
import MarketerContext from "../../Context/MarketerContext";
import axios from "axios";
import swal from "sweetalert";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function NavbarTop() {
  const { getUserData, getFetchTicker } = useContext(MarketerContext);
  const [userData, setUserData] = useState({});
  const [msg, setMsg] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [searchedTicket, setsearchedTicket] = useState([]);

  useEffect(() => {
    getUserData().then((data) => {
      console.log("UserData ===> ", data?.data);
      if (!data?.data) {
        swal("Your session has expired", "Please login again", "error");
      }
      setUserData(data?.data);
    });
  }, []);

  const searchTicker = async (e) => {
    try {
      setMsg(e.target.value);
      getFetchTicker(e.target.value.toUpperCase()).then((data) => {
        console.log("Searched Ticket: ", data?.data);
        setsearchedTicket(data?.data);
      });

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
          </div>

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
                    <div className="d-flex highlight-search justify-content-beteween align-items-center">
                      <div>
                        <span className="auto-ticker">{elem?.ticker}</span>
                        <span className="desc-ticker">{elem?.name}</span>
                      </div>
                      <div className="ticker-exchange">{elem?.exchange}</div>
                    </div>
                  );
                })
              ) : (
                <div>No Results</div>
              )}
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
          <div className="dropdown">
            <button
              className="btn btn-secondary top dropdown-top dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="useImage" src={User} alt="" />
              {userData?.username}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
