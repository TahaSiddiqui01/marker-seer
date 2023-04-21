import React from "react";
import "./DataCard.css";
import Grow from "../../assets/Vector (1).png";
import Down from "../../assets/down-arrow.png";
import { useNavigate } from "react-router-dom";

function DataCard(props) {

  let Navigate = useNavigate();

  return (
    <>
      <div onClick={()=> Navigate(`/analyze/${props?.ticket}`)} className="data-card cursor-pointer robotoFamily">
        <div className="data-card-top d-flex justify-content-between align-items-center">
          <span className="data-coin">{props?.ticket}</span>
          <span className="data-coin-date">({props?.date})</span>
        </div>
        <div className="data-card-bottom d-flex justify-content-between align-items-center">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <span className="amount">{props?.close}</span>
            <span
              style={{ color: props?.percent < 0 ? "#E21C57" : "#1BB274" }}
              className="d-flex amount-percent justify-content-center align-items-center"
            >
              {
                props?.percent < 0 ? <img className="my-3 mx-2" src={Down} alt="grow" /> : <img className="my-3 mx-2" src={Grow} alt="grow" />
              }
              
              {props?.percent}%
            </span>
          </div>

              {
                props?.signal === "SELL" ? <span className="sell-btn">{props?.signal}</span> : ""
              }

              {
                props?.signal === "BUY" ? <span className="buy-btn">{props?.signal}</span> : ""
              }

              {
                props?.signal === "NO_SIGNAL" ? <span className="nosignal-btn">{props?.signal}</span> : ""
              }

          
        </div>
      </div>
    </>
  );
}

export default DataCard;
