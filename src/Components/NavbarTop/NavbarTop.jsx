import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../../assets/Vector.png";
import User from "../../assets/user-4 1.png";
import MarketerContext from "../../Context/MarketerContext";

function NavbarTop() {
  const { getUserData } = useContext(MarketerContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData().then((data) => {
      console.log("UserData ===> ", data?.data);
      setUserData(data?.data);
    });
  }, []);

  return (
    <>
      {/* res_margin_nav */}
      <div className="robotoFamily dashboardHomeTop d-flex justify-content-between align-items-center ">
        <div
          className="d-flex justify-content-center nav_top_in_div align-items-center"
          style={{ width: "50%", position: "relative" }}
        >
          <input
            className="dashboardHomeTopInput px-3"
            placeholder="Search Tickers"
            type="text"
          />
          <img className="search-icon" src={SearchIcon} alt="" />
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
