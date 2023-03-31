import React, { useContext, useEffect, useState } from "react";
import "./InfluncerTable.css";
import MarketerContext from "../../Context/MarketerContext";
import { useNavigate } from "react-router-dom";

function InfluncerTable() {
  const Navigate = useNavigate();

  const [repeatTable, setRepeatTable] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [influncerData, setInfluncerData] = useState([]);

  const { getInfluncer } = useContext(MarketerContext);
  useEffect(() => {
    getInfluncer("NVDA", 10)
      .then((data) => {
        console.log("Influncer data: ", data?.data);
        setInfluncerData(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="res-div">
        <table className="influncer-table robotoFamily">
          <thead className="table-head">
            <tr>
              {influncerData?.headers?.map((elem) => {
                return <th className="table-heading">{elem}</th>;
              })}
              {/* <th className="table-heading">Name</th>
              <th className="table-heading">Similarity</th>
              <th className="table-heading">Signal</th> */}
            </tr>
          </thead>
          <tbody className="table-body">
            {influncerData?.data?.map((data) => {
              return (
                <tr className="tbrow">
                  <td className="table-data">
                    {" "}
                    <span
                      onClick={() => {
                        Navigate(`/analyze/${data?.ticker}`);
                      }}
                      className="gain-btn"
                    >
                      {data?.ticker}
                    </span>
                  </td>
                  <td className="table-data">{data?.name}</td>
                  <td className="table-data">{data?.exchange}</td>
                  <td style={{ color: "#D42722" }} className="table-data">
                    {Math.round(data?.similarity) + "%"}
                  </td>
                  <td style={{ color: "#D42722" }} className="table-data">
                    {data?.signal}
                  </td>
                </tr>
              );
            })}
            {/* 
          <tr className="tbrow">
            <td className="table-data">
              {" "}
              <span className="gain-btn">REBH</span>
            </td>
            <td className="table-data">Rebecca Hales</td>
            <td className="table-data">25%</td>
            <td className="table-data">Sell</td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfluncerTable;
