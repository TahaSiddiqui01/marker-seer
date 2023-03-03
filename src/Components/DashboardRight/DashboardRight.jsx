import React from "react";
import "./DashboardRight.css";
import Logo from "../../assets/logo 1.png";

import Dashboard from "../../assets/Dashboard Icon.png";
import TopGainer from "../../assets/Group 251.png";
import TopLoser from "../../assets/Group 250.png";
import TopBuys from "../../assets/Group 249.png";
import TopSells from "../../assets/Cart.png";
import Setting from "../../assets/Group 252.png";
import LogOut from "../../assets/Group 259.png";

function DashboardRight() {
  return (
    <>
      <div className="dashboardLeft">
        <div className="d-flex justify-items-center justify-content-center">
          <img className="web-logo" src={Logo} alt="" />
        </div>
        <div className="navigation-text"> NAVIGATIONS</div>
        <div className="navigation-table-left">
          {" "}
          <img src={Dashboard} alt="logo" /> <span>Dashboard</span> 
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={TopGainer} alt="logo" /> <span>Top Gainers</span> 
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={TopLoser} alt="logo" /> <span>Top Losers</span> 
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={TopBuys} alt="logo" /> <span>Top Buys</span> 
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={TopSells} alt="logo" /> <span>Top Sells</span> 
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={Setting} alt="logo" /> Settings
        </div>
        <div className="navigation-table-left">
          {" "}
          <img src={LogOut} alt="logo" /> Log out
        </div>
      </div>
    </>
  );
}

export default DashboardRight;
