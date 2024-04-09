import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import userApi from "../../api/userApi";

const Single = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserSingle = async () => {
      try {
        const response = await userApi.getDetail();
        console.log(response);
        setUserProfile(response.data)
      } catch (error) {
        console.log('Fail to fetch', error)
      }
    }
    fetchUserSingle();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={userProfile.profie_picture}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userProfile.full_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userProfile.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Password:</span>
                  <span className="itemValue">{userProfile.password}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">DOB: </span>
                  <span className="itemValue">{userProfile.dob}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{userProfile.phone_number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Gender:</span>
                  <span className="itemValue">{userProfile.gender ? 'Male' : 'Female'}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Registration Date:</span>
                  <span className="itemValue">{userProfile.registration_date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Account Status:</span>
                  <span className="itemValue">{userProfile.account_status ? 'Active' : 'Inactive'}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Faculty:</span>
                  <span className="itemValue">{userProfile.account_status ? 'Active' : 'Inactive'}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{userProfile.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
