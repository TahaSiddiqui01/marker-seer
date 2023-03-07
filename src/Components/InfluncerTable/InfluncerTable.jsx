import React, { useState } from "react";
import "./InfluncerTable.css";

function InfluncerTable() {
  const [repeatTable, setRepeatTable] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <>
      <div className="res-div">
        <table className="influncer-table robotoFamily">
          <thead className="table-head">
            <tr>
              <th className="table-heading">Ticker</th>
              <th className="table-heading">Name</th>
              <th className="table-heading">Similarity</th>
              <th className="table-heading">Signal</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {repeatTable?.map((elem) => {
              return (
                <tr className="tbrow">
                  <td className="table-data">
                    {" "}
                    <span className="gain-btn">REBH</span>
                  </td>
                  <td className="table-data">Rebecca Hales</td>
                  <td className="table-data">25%</td>
                  <td style={{ color: "#D42722" }} className="table-data">
                    Sell
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
