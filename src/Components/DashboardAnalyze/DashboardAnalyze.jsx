import React from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Insights from "../Insights/Insights";
import "./DashboardAnalyze.css";
import Arrow from "../../assets/arrow.png";
import ChartCompo from "../ChartCompo/ChartCompo";

function DashboardAnalyze() {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="DashboardHomeRight res_margin"
      >
        <NavbarTop />
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          <p
            className="dashboard-title interFamily py-0"
            style={{
              borderRight: "1px solid #324558",
              paddingRight: "1.2rem",
              marginRight: "1.2rem",
            }}
          >
            Analyze
          </p>
          <span className="gain-btn">APPL</span>
          <div className="d-flex justify-content-center align-items-center res_coinName">
            <span
              style={{ color: "rgba(50, 69, 88, 0.7);" }}
              className="interFamily mx-3"
            >
              Apple Inc - Nasdaq
            </span>
            <img src={Star} alt="star" />
          </div>
        </div>

        <div className="insights-parent">
          <p className="sub-heading">Insights</p>
          <div className="card_grid insightDataShow mt-4">
            <Insights
              signalColor={"#EF4782"}
              signal={"Sell"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#F8F38D"}
              signal={"$125"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#EAA658"}
              signal={"24%"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#9D94FF"}
              signal={"90%"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#42D6A4"}
              signal={"6"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#08CAD1"}
              signal={"BUY"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#FF6961"}
              signal={"$127 (+/- 2.5)"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#FFB480"}
              signal={"10%"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              signalColor={"#59ADF6"}
              signal={"80%"}
              signalTextColor={"#E21C57"}
            />

            <div className="insight-child-arrow ">
              <div className="m-2">
                <div className="d-flex justify-content-start align-items-center my-2">
                  <span
                    style={{ backgroundColor: "#59ADF6" }}
                    className="signal-circle mx-2"
                  ></span>
                  <span className="signal-text robotoFamily">
                    Current Signal
                  </span>
                </div>
                <p
                  style={{ color: "#59ADF6", marginLeft: "1.90rem" }}
                  className="signal-highlight robotoFamily  my-2"
                >
                  SELL
                </p>
              </div>
              <div
                className="insight-arrow-div"
                style={{ backgroundColor: "#1994A1" }}
              >
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>{/* <ChartCompo /> */}</div>
      </div>
    </>
  );
}

export default DashboardAnalyze;
