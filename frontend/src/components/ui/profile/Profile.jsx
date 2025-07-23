import React from "react";
import "./Profile.css";
import UserDetails from "./UserDetails";
import PetPreferences from "./PetPreferences";
import MyPreferences from "./MyPreferences";
import CommunityActivity from "./CommunityActivity";
import MyServices from "./MyServices";
import { jwtDecode } from "jwt-decode";
import MyArticles from "./MyArticles";

const Profile = () => {
  const rawToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const token = rawToken ? decodeURIComponent(rawToken) : null;

  let role = "";
  let userName = "";
  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded?.role;
      userName = decoded?.name || "";
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  return (
    <div className="profile">
      <UserDetails />
      <div className="user-profile-details">
        <div className="pet-prefferences-details">
          <PetPreferences />
          <MyPreferences />
          {role === "business" && <MyServices />}
        </div>
        <div className="user-activity-details">
          <CommunityActivity userName={userName} />
          <MyArticles />
        </div>
      </div>
    </div>
  );
};

export default Profile;
