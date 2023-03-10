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

  return (
    <>
      {data?.length > 0 ? (
        <TypeChooser>
          {(type) => <Chart type={type} data={data} />}
        </TypeChooser>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default ChartCompo;
