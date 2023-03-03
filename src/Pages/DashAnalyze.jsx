import React from 'react'
import DashboardRight from "../Components/DashboardRight/DashboardRight";
import DashboardHome from "../Components/DashboardHome/DashboardHome";
import "./Pages.css";
import DashboardAnalyze from '../Components/DashboardAnalyze/DashboardAnalyze';

function DashAnalyze() {
  return (
    <div className="DashboardHomePage">
      <DashboardRight />
      <DashboardAnalyze />
    </div>
  )
}

export default DashAnalyze