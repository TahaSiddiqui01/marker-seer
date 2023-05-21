// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";

// function ApexChart(props) {
//   const [chartData, setChartData] = useState([]);

//   const data = {
//     options: {
//       chart: {
//         type: "candlestick",
//         height: 350,
//       },
//       title: {
//         text: "Signals",
//         align: "left",
//       },
//       // xaxis: {
//       //   type: "datetime",
//       // },
//       xaxis: {
//         type: "category",
//         labels: {
//           formatter: function (val) {
//             const date = new Date(val);
//             const formattedDate = date.toLocaleString("en-US", {
//               month: "short",
//               day: "numeric",
//               hour: "numeric",
//               minute: "numeric",
//               hour12: false,
//             });
//             return formattedDate;
//           },
//         },
//       },
//       yaxis: {
//         tooltip: {
//           enabled: true,
//         },
//       },
//       annotations: {
//         // xaxis: [
//         //   {
//         //     x: "Mar 10, 24:00",
//         //     x2: "Mar 17, 24:00",
//         //     borderColor: "#00E396",
//         //     label: {
//         //       borderColor: "#00E396",
//         //       style: {
//         //         fontSize: "12px",
//         //         color: "#fff",
//         //         background: "#00E396",
//         //       },
//         //       orientation: "horizontal",
//         //       offsetY: 7,
//         //       text: "Buy",
//         //     },
//         //   },
//         // ],
//         // yaxis: [
//         //   {
//         //     y: "114.00000000000000",
//         //     y2: "108.00000000000000",
//         //     borderColor: "#00E396",
//         //     label: {
//         //       borderColor: "rgb(226, 28, 87)",
//         //       style: {
//         //         fontSize: "12px",
//         //         color: "#fff",
//         //         background: "rgb(226, 28, 87)",
//         //       },
//         //       orientation: "horizontal",
//         //       offsetY: 7,
//         //       text: "Sell",
//         //     },
//         //   },
//         // ],

//         points: [
//           {
//             x: "Mar 27, 24:00",
//             y: "112.00000000000000",
//             borderColor: "rgb(226, 28, 87)",
//             label: {
//               borderColor: "rgb(226, 28, 87)",
//               style: {
//                 fontSize: "12px",
//                 color: "#fff",
//                 background: "rgb(226, 28, 87)",
//               },
//               orientation: "horizontal",
//               offsetY: 7,
//               text: "SELL",
//             },
//           },
//           {
//             x: "Feb 24, 24:00",
//             y: "102.00000000000000",
//             label: {
//               text: "BUY",
//             },

//             borderColor: "#00E396",
//             label: {
//               borderColor: "#00E396",
//               style: {
//                 fontSize: "12px",
//                 color: "#fff",
//                 background: "#00E396",
//               },
//               orientation: "horizontal",
//               offsetY: 7,
//               text: "BUY",
//             },
//           },
//         ],
//       },
//     },
//   };

//   useEffect(() => {
//     const parseData = props?.chartData?.map((elem) => {
//       let dt = new Date(elem?.date);
//       elem.date = dt;
//       elem.low = elem?.close;
//       return elem;
//     });

//     const mappedChartData = parseData.map((elem) => {
//       return {
//         x: elem.date,
//         y: [elem?.open, elem?.high, elem?.low, elem?.close],
//       };
//     });

//     let parseChartData = [{ data: mappedChartData }];

//     // console.log(parseData, "<=========== ParseChartData");

//     let sellData  = parseData.filter((elem) => {
//       if (elem.signal === "SELL") {
//         console.log(elem.signal)
//         return {
//           x: elem.date,
//           y: [elem?.open, elem?.high, elem?.low, elem?.close],
//         };
//       }
//     });
//     let buyData  = parseData.filter((elem) => {
//       console.log(elem.signal)
//       if (elem.signal === "BUY") {
//         return {
//           x: elem.date,
//           y: [elem?.open, elem?.high, elem?.low, elem?.close],
//         };
//       }
//     });
//     let noSignalData  = parseData.filter((elem) => {
//       console.log(elem.signal)
//       if (elem.signal === "NO_SIGNAL") {
//         return {
//           x: elem.date,
//           y: [elem?.open, elem?.high, elem?.low, elem?.close],
//         };
//       }
//     });



//     setChartData(parseChartData);
//   }, [props?.chartData]);

//   return (
//     <>
//       <div id="chart">
//         <Chart
//           options={data.options}
//           series={chartData}
//           type="candlestick"
//           height={480}
//         />
//       </div>
//     </>
//   );
// }

// export default ApexChart;







// ===============================> This is the latest chart using CanvasJs

import CanvasJSReact from "@canvasjs/react-charts";
import { useEffect, useState } from "react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ApexChart(props) {

  const [buyDataPoints, setBuyDataPoints] = useState([])
  const [sellDataPoints, setSellDataPoints] = useState([])
  const [noSignalDataPoints, setNoSignalDataPoints] = useState([])


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

    // console.log(parseData, "<=========== ParseChartData");

    let sellData = []

    for(let elem of parseData){
      if (elem.signal === "SELL") {
        let obj = {
          x: elem.date,
          y: [elem?.open, elem?.high, elem?.low, elem?.close],
        };

        sellData.push(obj)

      }
    };
    setSellDataPoints(sellData)

    let buyData = []

    for(let elem of parseData){
      if (elem.signal === "BUY") {
        let obj = {
          x: elem.date,
          y: [elem?.open, elem?.high, elem?.low, elem?.close],
        };

        buyData.push(obj)

      }
    };
    setBuyDataPoints(buyData)

    let noSignalData = []
    for(let elem of parseData){
      if (elem.signal === "NO_SIGNAL") {
        let obj = {
          x: elem.date,
          y: [elem?.open, elem?.high, elem?.low, elem?.close],
        };

        noSignalData.push(obj)

      }
    };
    setNoSignalDataPoints(noSignalData)



    // setChartData(parseChartData);
  }, [props?.chartData]);



  const options = {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title: {
      text: "Signals"
    },
    // subtitles: [{
    // 	text: "Weekly Averages"
    // }],
    axisX: {
      interval: 1,
      // valueFormatString: "MMM"
    },
    axisY: {
      prefix: "$",
      title: "Price"
    },
    toolTip: {
      content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
    },
    data: [{
      type: "candlestick",
      yValueFormatString: "$##0.00",
      dataPoints: buyDataPoints,
      color: "green"
    },
    {
      type: "candlestick",
      yValueFormatString: "$##0.00",
      dataPoints: noSignalDataPoints,
      color: "grey"
    },
    {
      type: "candlestick",
      yValueFormatString: "$##0.00",
      dataPoints: sellDataPoints,
      color: "red"
    }]
  }

  console.log(sellDataPoints, buyDataPoints, noSignalDataPoints)

  return (
    <>
        <CanvasJSChart options={options}
        />
    </>
  )
}

export default ApexChart