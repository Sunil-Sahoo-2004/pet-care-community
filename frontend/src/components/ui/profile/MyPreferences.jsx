import React from "react";
import { FaHeartbeat, FaDog, FaCalendarAlt } from "react-icons/fa";

const MyPreferences = () => {
  return (
    <div className="my-preferences-section">
      <div className="my-preferences-section-header">
        <h3>My Preferences</h3>
      </div>
      <div className="preferences">
        <div className="preference-item">
          <FaHeartbeat className="icon" />
          <h4>Activity Level</h4>
          <p>High Energy Play</p>
        </div>
        <div className="preference-item">
          <FaDog className="icon" />
          <h4>Favorite Pet Type</h4>
          <p>Dogs</p>
        </div>
        <div className="preference-item">
          <FaCalendarAlt className="icon" />
          <h4>Pet Owner Since</h4>
          <p>2018</p>
        </div>
      </div>
    </div>
  );
};

export default MyPreferences;
