import React, { useContext, useEffect, useState, useCallback } from "react";
import "./DashboardRightData.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import TaskScroll from "../../assets/Tasks scroll through.png";
import DataCard from "../DataCard/DataCard";
import MarketerContext from "../../Context/MarketerContext";
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

function DashboardRightData() {
  const { getFavourites, getUserData, setExpiredFromOut, expired } =
    useContext(MarketerContext);

  const [favouriteData, setFavouriteData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFavourites().then((data) => {
      // console.log("Favourite Data: ", data?.data);
      setFavouriteData(data?.data);
      if (data?.data?.length <= 0) {
        setIsLoading(false);
      }
    });
  }, []);

  const elem = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderNavbar = useCallback(() => {
    return <NavbarTop />;
  }, []);

  getUserData()
    .then((data) => {
      let subscriptionData = new Date(data?.data?.subscription_end_date);
      var currentDate = new Date();

      console.log(currentDate > subscriptionData, data?.data?.subscription_end_date);

      if (currentDate > subscriptionData) {
        setExpiredFromOut(true);
      }
    })
    .catch((error) => {
      // console.log(error);
    });

  // I will make the

  return (
    <>
      <div className="DashboardHomeRight res_margin">
        {/* <NavbarTop /> */}
        {renderNavbar()}

        {!expired ? (
          <>
            <p className="dashboard-title interFamily">Dashboard</p>

            <div
              style={{ height: "fit-content" }}
              className="dashboard-empty px-3 d-flex align-items-center flex-column"
            >
              <div className="dash-favourites">
                <p className="sub-heading robotoFamily my-3">Favorites</p>
                <div className="card_grid">
                  {favouriteData?.length > 0 ? (
                    favouriteData?.map((elem) => {
                      return (
                        <DataCard
                          ticket={elem?.ticker?.ticker}
                          date={`As of ${new Date(
                            elem?.date
                          )?.toLocaleDateString()}`}
                          close={parseFloat(elem?.close).toFixed(2)}
                          percent={parseFloat(elem?.percent).toFixed(2)}
                          // close={Math.round(elem?.close)}
                          // percent={Math.round(elem?.percent)}
                          signal={elem?.signal}
                        />
                      );
                    })
                  ) : // <h2
                    //   style={{
                    //     margin: "3rem",
                    //     fontWeight: "600",
                    //     fontSize: "20px",
                    //   }}
                    // >
                    //   Oops! nothing to show
                    // </h2>
                    isLoading ? (
                      <FadeLoader cssOverride={override} color="#33a9c8" />
                    ) : (
                      ""
                    )}
                </div>
              </div>
              <div className="dash-staff-favourites">
                <p className="sub-heading robotoFamily my-3">Staff Favorites</p>
                <div className="card_grid">
                  {favouriteData?.length > 0 ? (
                    favouriteData?.map((elem) => {
                      return (
                        <DataCard
                          ticket={elem?.ticker?.ticker}
                          date={`As of ${new Date(
                            elem?.date
                          )?.toLocaleDateString()}`}
                          close={parseFloat(elem?.close).toFixed(2)}
                          percent={parseFloat(elem?.percent).toFixed(2)}
                          // close={Math.round(elem?.close)}
                          // percent={Math.round(elem?.percent)}
                          signal={elem?.signal}
                        />
                      );
                    })
                  ) : // <h2
                    //   style={{
                    //     margin: "3rem",
                    //     fontWeight: "600",
                    //     fontSize: "20px",
                    //   }}
                    // >
                    //   Oops! nothing to show
                    // </h2>
                    isLoading ? (
                      <FadeLoader cssOverride={override} color="#33a9c8" />
                    ) : (
                      ""
                    )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2
            style={{
              margin: "3rem",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Your subscription has expired
          </h2>
        )}
      </div>
    </>
  );
}

export default DashboardRightData;
