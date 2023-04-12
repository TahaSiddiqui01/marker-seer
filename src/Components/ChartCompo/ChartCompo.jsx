import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Chart from "./Chart";
import { getData } from "./Utils";
import { TypeChooser } from "react-stockcharts/lib/helper";
import "./ChartCompo.css";

function ChartCompo(props) {
  const [data, setData] = useState([]);
  let styles = false;

  useEffect(() => {
    getData().then((data) => {
      // setData(data);
      console.log("Chart Data: =============>", data);
      console.log("Historic Char data: =========>", props?.chartData);
      setData(data);
    });

    console.log("Document load; ");
    const chartContainer = document.getElementById("my-chart-container");
    styles = window.getComputedStyle(chartContainer);
    console.log(styles, "ldk");
  }, [props?.chartData]);
  return (
    <>
      <div id="my-chart-container">
        {data?.length > 0 ? (
          <TypeChooser>
            {(type) => <Chart type={type} data={data} />}
          </TypeChooser>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
}

export default ChartCompo;
