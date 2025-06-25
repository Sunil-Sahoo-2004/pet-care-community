import React from "react";
import { assets } from "../../../assets/assets";

const UserDetails = () => {
  return (
    <div className="user-personal-details">
      <div className="user-personal-detail">
        <div className="user-image">
          <img src={assets.Profile} alt="Profile" />
        </div>
        <div className="user-detail">
          <h2 className="user-name">Luna Heart</h2>
          <p className="user-email-id">luna.heart@example.com</p>
          <div className="more-details">
            <div className="address">
              <p>📍 San Diego, CA, USA</p>
            </div>
            <div className="joining-date">
              <p>🗓️ Member since October 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-profile">
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserDetails;
