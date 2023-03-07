import React from "react";
import "./DataCard.css";
import Grow from "../../assets/Vector (1).png";

function DataCard() {
  return (
    <>
      <div className="data-card robotoFamily">
        <div className="data-card-top d-flex justify-content-between align-items-center">
          <span className="data-coin">APPL</span>
          <span className="data-coin-date">(As of 11/16/2021)</span>
        </div>
        <div className="data-card-bottom d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <span className="amount">243</span>
            <span
              style={{ color: "#1BB274" }}
              className="d-flex amount-percent justify-content-center align-items-center"
            >
              <img className="my-3 mx-2" src={Grow} alt="grow" /> 20%
            </span>
          </div>
          <span className="sell-btn">SELL</span>
        </div>
      </div>
    </>
  );
}

export default DataCard;
