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
        <img src={Logo} alt="" />
        <div className="navigation-text"> NAVIGATIONS</div>
        <div>
          {" "}
          <img src={Dashboard} alt="logo" /> Dashboard
        </div>
        <div>
          {" "}
          <img src={TopGainer} alt="logo" /> Top Gainers
        </div>
        <div>
          {" "}
          <img src={TopLoser} alt="logo" /> Top Losers
        </div>
        <div>
          {" "}
          <img src={TopBuys} alt="logo" /> Top Buys
        </div>
        <div>
          {" "}
          <img src={TopSells} alt="logo" /> Top Sells
        </div>
        <div>
          {" "}
          <img src={Setting} alt="logo" /> Settings
        </div>
        <div>
          {" "}
          <img src={LogOut} alt="logo" /> Log out
        </div>
      </div>
    </>
  );
}

export default DashboardRight;
