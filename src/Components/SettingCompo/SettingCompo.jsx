import React, { useCallback, useContext, useEffect, useState } from "react";
import "./SettingCompo.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import CatProfile from "../../assets/Cat Profile.png";
import MarketerContext from "../../Context/MarketerContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SettingCompo() {
  const { getUserData, updatedPassword } = useContext(MarketerContext);
  const [profileData, setProfileData] = useState({});
  const [formatDate, setFormatDate] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getUserData()
      .then((data) => {
        console.log("Response from profile data: ", data?.data);
        setProfileData(data?.data);
        let newDate = new Date(data?.data?.subscription_end_date);
        let utcDate = newDate.toUTCString().split(" ");
        let formatedDate = `${utcDate[2]} ${utcDate[1]}, ${utcDate[3]}`;
        setFormatDate(formatedDate);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, []);

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const changePass = () => {
    updatedPassword(password)
      .then((data) => {
        console.log("Your password change: ", data);
        toast.success("Password changed successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setPassword("");
      })
      .catch((err) => {
        toast.error("POops! something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("Error: ", err);
      });
  };

  const renderNavbar = useCallback(() => {
    return <NavbarTop />;
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <div
        className="DashboardHomeRight res_margin robotoFamily"
        style={{ overflowX: "hidden" }}
      >
        {/* <NavbarTop /> */}
        {renderNavbar()}

        <p className="dashboard-title interFamily">Settings</p>

        <div className="d-flex justify-content-between align-items-center gap-5 setting-parent">
          <div className="setting-box-1">
            <p className="setting_heading">Account Information</p>
            <div className="profile_section my-4 d-flex justify-content-start flex-wrap align-items-center">
              <img className="profile-img " src={CatProfile} alt="" />
              <div className="profile_detail d-flex justify-content-center align-items-center flex-column">
                <span className="align-self-start">
                  {profileData?.username}
                </span>
                <span>{profileData?.email}</span>
              </div>
            </div>
            <div
              style={{ width: "fit-content" }}
              className="d-flex input-parent justify-content-start align-items-center flex-column"
            >
              <label
                className="profile-label align-self-start"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleOnChange}
                value={password}
                className="profile-input"
                type="password"
              />
            </div>
            <button onClick={changePass} className="profile_btn">
              Change Password
            </button>
          </div>
          <div className="setting-box-2">
            <p className="setting_heading">Subscrption</p>
            <div className="subscription-detail d-flex flex-column">
              <span
                className="trail-text trail-style"
                style={{ cursor: "pointer" }}
              >
                {profileData?.subscription?.description}
              </span>
              <span>Expires {formatDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingCompo;
