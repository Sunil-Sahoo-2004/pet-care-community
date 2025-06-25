import React from "react";
import "./Profile.css";
import UserDetails from "./UserDetails";
import PetPreferences from "./PetPreferences";
import MyPreferences from "./MyPreferences";
import CommunityActivity from "./CommunityActivity";
import SavedResources from "./SavedResourses";


const Profile = () => {
  return (
    <div className="profile">
      <UserDetails />
      <div className="user-profile-details">
        <div className="pet-prefferences-details">
          <PetPreferences />
          <MyPreferences />
        </div>
        <div className="user-activity-details">
          <CommunityActivity />
          <SavedResources />
        </div>
      </div>
    </div>
  );
};

export default Profile;
