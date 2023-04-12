import React, { useContext, useEffect, useState } from "react";
import "./DashboardRightData.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import TaskScroll from "../../assets/Tasks scroll through.png";
import DataCard from "../DataCard/DataCard";
import MarketerContext from "../../Context/MarketerContext";

function DashboardRightData() {
  const { getFavourites } = useContext(MarketerContext);

  const [favouriteData, setFavouriteData] = useState([]);

  useEffect(() => {
    getFavourites().then((data) => {
      console.log("Favourite Data: ", data?.data);
      setFavouriteData(data?.data);
    });
  }, []);

  const elem = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="DashboardHomeRight res_margin">
        <NavbarTop />

        <p className="dashboard-title interFamily">Dashboard</p>

        <div
          style={{ height: "fit-content" }}
          className="dashboard-empty px-3 d-flex align-items-center flex-column"
        >
          <div className="dash-favourites">
            <p className="sub-heading robotoFamily my-3">Favorites</p>
            <div className="card_grid">
              {favouriteData?.map((elem) => {
                return (
                  <DataCard
                    ticket={elem?.ticker?.ticker}
                    date={`As of ${new Date(elem?.date)?.toLocaleDateString()}`}
                    close={elem?.close}
                    percent={elem?.percent}
                    // close={Math.round(elem?.close)}
                    // percent={Math.round(elem?.percent)}
                    signal={elem?.signal}
                  />
                );
              })}
            </div>
          </div>
          <div className="dash-staff-favourites">
            <p className="sub-heading robotoFamily my-3">Staff Favorites</p>
            <div className="card_grid">
              {/* {elem?.map((elem) => {
                return (
                  <DataCard
                    ticket="APPL"
                    date="As of 11/16/2021"
                    close="240"
                    percent="20"
                    signal="BUY"
                  />
                );
              })} */}
              {favouriteData?.map((elem) => {
                return (
                  <DataCard
                    ticket={elem?.ticker?.ticker}
                    date={`As of ${new Date(elem?.date)?.toLocaleDateString()}`}
                    close={elem?.close}
                    percent={elem?.percent}
                    // close={Math.round(elem?.close)}
                    // percent={Math.round(elem?.percent)}
                    signal={elem?.signal}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardRightData;
