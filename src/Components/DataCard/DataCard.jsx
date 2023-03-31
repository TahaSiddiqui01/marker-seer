import React from "react";
import "./DataCard.css";
import Grow from "../../assets/Vector (1).png";

function DataCard(props) {
  return (
    <>
      <div className="data-card robotoFamily">
        <div className="data-card-top d-flex justify-content-between align-items-center">
          <span className="data-coin">{props?.ticket}</span>
          <span className="data-coin-date">({props?.date})</span>
        </div>
        <div className="data-card-bottom d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <span className="amount">{props?.close}</span>
            <span
              style={{ color: "#1BB274" }}
              className="d-flex amount-percent justify-content-center align-items-center"
            >
              <img className="my-3 mx-2" src={Grow} alt="grow" />{" "}
              {props?.percent}%
            </span>
          </div>
          <span className="sell-btn">{props?.signal}</span>
        </div>
      </div>
    </>
  );
}

export default DataCard;
