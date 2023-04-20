import React, { useContext, useEffect } from "react";
import "./DashboardRight.css";
import Logo from "../../assets/logo 1.png";

import Dashboard from "../../assets/Dashboard Icon.png";
import TopGainer from "../../assets/Group 251.png";
import TopLoser from "../../assets/Group 250.png";
import TopBuys from "../../assets/Group 249.png";
import TopSells from "../../assets/Cart.png";
import Setting from "../../assets/Group 252.png";
import LogOut from "../../assets/Group 259.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import Logo2 from "../../assets/logo-2.png";
import MarketerContext from "../../Context/MarketerContext";

function DashboardRight() {
  let Navigate = useNavigate();

  let location = useLocation();

  const { logoutTheUser } = useContext(MarketerContext);

  const handlesidebar = () => {
    // console.log("click");
    let dashNav = document.getElementsByClassName("dashboardLeft")[0];
    dashNav.classList.toggle("hide");
    let sides = document.getElementsByClassName("side_text");
    for (let side of sides) {
      side.classList.toggle("side_text1");
    }
  };
  let breakpoint = window.matchMedia("(max-width:770px)");

  useEffect(() => {
    if (breakpoint.matches) {
      // console.log("It matches");
    }
  }, [breakpoint?.matches]);

  const logoutMe = () => {
    logoutTheUser().then((data) => {
      // console.log("Logout Response: ", data);

      localStorage.removeItem("token");
    });
    localStorage.setItem("remember", false);
    Navigate("/login");
  };

  return (
    <div className="ham_parent ">
      <RxHamburgerMenu className="hamburger  " onClick={handlesidebar} />
      <div className="dashboardLeft seek">
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="web-logo side_text"
            onClick={() => Navigate("/")}
            src={Logo2}
            alt=""
            cc
          />
        </div>
        <div className="navigation-text side_text"> NAVIGATIONS</div>
        <div
          onClick={() => {
            Navigate("/");
          }}
          className="navigation-table-left"
        >
          {" "}
          <img className="dashLogo" src={Dashboard} alt="logo" />{" "}
          <span
            className={`side_text ${
              location.pathname === "/" ? "active-color" : ""
            }`}
          >
            Dashboard
          </span>
        </div>
        <div className="navigation-table-left">
          {" "}
          <img className="dashLogo" src={TopGainer} alt="logo" />{" "}
          <span
            onClick={() => {
              Navigate("/top-gainer");
            }}
            className={`side_text ${
              location.pathname === "/top-gainer" ? "active-color" : ""
            }`}
          >
            Top Gainers
          </span>
        </div>
        <div className="navigation-table-left">
          {" "}
          <img className="dashLogo" src={TopLoser} alt="logo" />{" "}
          <span className="side_text">Top Losers</span>
        </div>
        <div className="navigation-table-left">
          {" "}
          <img className="dashLogo" src={TopBuys} alt="logo" />{" "}
          <span className="side_text">Top Buys</span>
        </div>
        <div className="navigation-table-left">
          {" "}
          <img className="dashLogo" src={TopSells} alt="logo" />{" "}
          <span className="side_text">Top Sells</span>
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={Setting} alt="logo" />{" "}
          <span
            onClick={() => {
              Navigate("/setting");
            }}
            className={`side_text ${
              location.pathname === "/setting" ? "active-color" : ""
            }`}
          >
            {" "}
            Settings
          </span>{" "}
        </div>
        <div className="navigation-table-left">
          {" "}
          <img className="dashLogo" src={LogOut} alt="logo" />{" "}
          <span onClick={logoutMe} className="side_text">
            {" "}
            Log out
          </span>
        </div>
      </div>
    </div>
  );
}

export default DashboardRight;
