import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function ApexChart(props) {
  const [chartData, setChartData] = useState([]);

  const data = {
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "Signals",
        align: "left",
      },
      // xaxis: {
      //   type: "datetime",
      // },
      xaxis: {
        type: "category",
        labels: {
          formatter: function (val) {
            const date = new Date(val);
            const formattedDate = date.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            });
            return formattedDate;
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      annotations: {
        xaxis: [
          {
            x: "Mar 10, 24:00",
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                fontSize: "12px",
                color: "#fff",
                background: "#00E396",
              },
              orientation: "horizontal",
              offsetY: 7,
              text: "Buy",
            },
          },
        ],
      },
    },
  };

  useEffect(() => {
    const parseData = props?.chartData?.map((elem) => {
      let dt = new Date(elem?.date);
      elem.date = dt;
      elem.low = elem?.close;
      return elem;
    });

    const mappedChartData = parseData.map((elem) => {
      return {
        x: elem.date,
        y: [elem?.open, elem?.high, elem?.low, elem?.close],
      };
    });

    let parseChartData = [{ data: mappedChartData }];

    console.log(parseData, "<=========== ParseChartData");

    setChartData(parseChartData);
  }, [props?.chartData]);

  return (
    <>
      <div id="chart">
        <Chart
          options={data.options}
          series={chartData}
          type="candlestick"
          height={480}
        />
      </div>
    </>
  );
}

export default ApexChart;
