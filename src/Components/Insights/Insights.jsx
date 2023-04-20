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
      <p
        style={{ color: props?.color, marginLeft: "1.90rem" }}
        className="signal-highlight robotoFamily  my-2"
      >
        {props?.signal}
      </p>
    </div>
  );
}

export default Insights;
