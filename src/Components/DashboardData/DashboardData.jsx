import React, { useEffect, useState } from "react";
import DashboardRight from "../DashboardRight/DashboardRight";
import DashboardHome from "../DashboardHome/DashboardHome";
import DashboardRightData from "../DashboardRightData/DashboardRightData";
import { useNavigate } from "react-router-dom";

function DashboardData() {
  let token = localStorage.getItem("token");
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      Navigate("/login");
    }else{
      setIsLoading(true)
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={{ height: "100%" }} className="DashboardHomePage">
          <DashboardRight />
          <DashboardRightData />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DashboardData;
