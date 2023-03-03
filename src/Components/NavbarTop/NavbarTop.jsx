import React from "react";
import SearchIcon from "../../assets/Vector.png";
import User from "../../assets/user-4 1.png";

function NavbarTop() {
  return (
    <>
      <div className="robotoFamily dashboardHomeTop d-flex justify-content-between align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "50%", position: "relative" }}
        >
          <input
            className="dashboardHomeTopInput px-3"
            placeholder="Search Tickers"
            type="text"
          />
          <img className="search-icon" src={SearchIcon} alt="" />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="trail-text"
            style={{ backgroundColor: "#FFB80066", color: "#324558" }}
          >
            Trail
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary top dropdown-top dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="useImage" src={User} alt="" /> Devid John
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
