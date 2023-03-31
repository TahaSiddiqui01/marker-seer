import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Chart from "./Chart";
import { getData } from "./Utils";

import { TypeChooser } from "react-stockcharts/lib/helper";

function ChartCompo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  const chartContainer = document.getElementById("my-chart-container");
  const styles = window.getComputedStyle(chartContainer);
  console.log(styles);

  return (
    <>
      {styles && (
        <div id="my-chart-container">
          {data?.length > 0 ? (
            <TypeChooser>
              {(type) => <Chart type={type} data={data} />}
            </TypeChooser>
          ) : (
            "Loading..."
          )}
        </div>
      )}
    </>
  );
}

export default ChartCompo;
