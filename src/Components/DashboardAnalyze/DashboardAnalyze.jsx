import React, { useContext, useEffect } from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import Star from "../../assets/star.png";
import Insights from "../Insights/Insights";
import "./DashboardAnalyze.css";
import Arrow from "../../assets/arrow.png";
import ChartCompo from "../ChartCompo/ChartCompo";
import MarketerContext from "../../Context/MarketerContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

function DashboardAnalyze() {
  const { getAnalyze, addToFavourites } = useContext(MarketerContext);
  const [analyzeData, setAnalyzeData] = useState({});
  const [yourDate, setYourDate] = useState("");
  const Navigate = useNavigate();
  const { ticket } = useParams();
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    getAnalyze(ticket, 30).then((data) => {
      console.log("Analyze Data: ", data);
      setAnalyzeData(data?.data);
      let newDate = new Date(data?.data?.date);
      let utcDate = newDate.toUTCString().split(" ");
      let formatedDate = `As of ${utcDate[2]} ${utcDate[1]}, ${utcDate[3]}`;
      setYourDate(formatedDate);
    });

    setTimeout(() => {
      setShowChart(true);
    }, 5000);
  }, []);

  const addToFavourite = (ticker, exchange) => {
    addToFavourites(ticker, exchange)
      .then((data) => {
        console.log("Add to favourite response: ", data);
        toast("Add to favourite successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}

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
          <span className="gain-btn">{analyzeData?.ticker?.ticker}</span>
          <div className="d-flex justify-content-center align-items-center res_coinName">
            <span
              style={{ color: "rgba(50, 69, 88, 0.7);" }}
              className="interFamily mx-3"
            >
              {analyzeData?.ticker?.name} - {analyzeData?.ticker?.exchange}
            </span>
            <img
              style={{ cursor: "pointer" }}
              src={Star}
              alt="star"
              onClick={() => {
                addToFavourite(
                  analyzeData?.ticker?.ticker,
                  analyzeData?.ticker?.exchange
                );
              }}
            />
          </div>
        </div>

        <div className="insights-parent">
          <div className="d-flex analyze-date-headin justify-content-between align-items-center">
            <p className="sub-heading">Insights</p>

            <p className="your_date">{yourDate}</p>
          </div>
          <div className="card_grid insightDataShow mt-4">
            <Insights
              heading="Current signal"
              signalColor={"#EF4782"}
              signal={analyzeData?.signal}
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="Market Price"
              signalColor={"#F8F38D"}
              signal={"$" + Math.round(analyzeData?.close)}
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="30 Day Strategy Performancce"
              signalColor={"#EAA658"}
              signal={
                Math.round(analyzeData?.metadata?.strategy_performance) + "%"
              }
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="AI Confidence Index"
              signalColor={"#9D94FF"}
              signal={"90%"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="No of Signals"
              signalColor={"#42D6A4"}
              signal={analyzeData?.metadata?.no_of_trades}
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="Next Predicted Signal"
              signalColor={"#08CAD1"}
              signal={"BUY"}
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="Next Predicted Signal"
              signalColor={"#FF6961"}
              signal={Math.round(analyzeData?.predicted_close)}
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="30 Day Market Performance"
              signalColor={"#FFB480"}
              signal={
                Math.round(analyzeData?.metadata?.market_performance) + "%"
              }
              signalTextColor={"#E21C57"}
            />
            <Insights
              heading="Prediction Accuracy"
              signalColor={"#59ADF6"}
              signal={analyzeData?.indicators?.sdfsd || "NaN"}
              signalTextColor={"#E21C57"}
            />

            <div className="insight-child-arrow ">
              <div className="m-2">
                <div className="d-flex justify-content-start align-items-center my-2">
                  <span
                    style={{ backgroundColor: "#59ADF6" }}
                    className="signal-circle mx-2"
                  ></span>
                  <span className="signal-text robotoFamily">Influncers</span>
                </div>
                <p
                  style={{ color: "#59ADF6", marginLeft: "1.90rem" }}
                  className="signal-highlight robotoFamily  my-2"
                >
                  {analyzeData?.influencer_count}
                </p>
              </div>
              <div
                onClick={() =>
                  Navigate(`/influncer/${ticket}`)
                }
                className="insight-arrow-div"
                style={{ backgroundColor: "#1994A1" }}
              >
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <div>{showChart ? <ChartCompo /> : ""}</div> */}
        <div>
          {/* <ChartCompo /> */}
        </div>
      </div>
    </>
  );
}

export default DashboardAnalyze;
