import React from "react";
import "./SettingCompo.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import CatProfile from "../../assets/Cat Profile.png";

function SettingCompo() {
  return (
    <>
      <div className="DashboardHomeRight res_margin robotoFamily">
        <NavbarTop />

        <p className="dashboard-title interFamily">Settings</p>

        <div className="d-flex justify-content-between align-items-center gap-5 setting-parent">
          <div className="setting-box-1">
            <p className="setting_heading">Account Information</p>
            <div className="profile_section my-4 d-flex justify-content-start flex-wrap align-items-center">
              <img className="profile-img " src={CatProfile} alt="" />
              <div className="profile_detail d-flex justify-content-center align-items-center flex-column">
                <span className="align-self-start">jane_doe</span>
                <span>devidj@gmail.com</span>
              </div>
            </div>
            <div style={{width:"fit-content"}} className="d-flex input-parent justify-content-start align-items-center flex-column">
              <label className="profile-label align-self-start" htmlFor="password">Password</label>
              <input className="profile-input" type="password" />
            </div>
            <button className="profile_btn">Change Password</button>
          </div>
          <div className="setting-box-2">
            <p className="setting_heading">Subscrption</p>
            <div className="subscription-detail d-flex flex-column">
              <span className="trail-text trail-style" style={{cursor:"pointer"}}>Trail</span>
              <span>Expires June 6, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingCompo;
