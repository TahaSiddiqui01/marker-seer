import React from "react";
import "./Insights.css";

function Insights(props) {
  return (
    <div className="insight-child ">
      <div className="d-flex justify-content-start align-items-center my-2">
        <span
          style={{ backgroundColor: props?.signalColor }}
          className="signal-circle mx-2"
        ></span>
        <span className="signal-text robotoFamily">{props?.heading}</span>
      </div>

      {
        props?.heading === "Current Signal" || props?.heading === "Next Predicted Signal" ? <>

          {
            props?.signal === "SELL" ?
              <p
                style={{ color: "#E21C57", marginLeft: "1.90rem" }}
                className="signal-highlight robotoFamily  my-2"
              >
                {props?.signal}
              </p> : ""
          }

          {
            props?.signal === "BUY" ?
              <p
                style={{ color: "#1BB274", marginLeft: "1.90rem" }}
                className="signal-highlight robotoFamily  my-2"
              >
                {props?.signal}
              </p> : ""
          }

          {
            props?.signal === "NO_SIGNAL" ?
              <p
                style={{ color: "#324558", marginLeft: "1.90rem" }}
                className="signal-highlight robotoFamily  my-2"
              >
                {props?.signal}
              </p> : ""
          }
        </> : <p
                style={{ color: props?.color, marginLeft: "1.90rem" }}
                className="signal-highlight robotoFamily  my-2"
              >
                {props?.signal}
              </p> 
      }



    </div>
  );
}

export default Insights;
