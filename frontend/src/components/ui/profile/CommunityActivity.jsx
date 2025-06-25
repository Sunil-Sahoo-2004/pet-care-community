import React from "react";

const CommunityActivity = () => {
  return (
    <div className="community-activity-section">
      <h3>Community Activity</h3>
      <ul className="activity-list">
        <li className="activity-item">
          <strong>Forum Post:</strong>
          <br />
          Best Diet for Senior Dogs
          <br />
          <small>🗓️ Nov 15, 2023</small>
        </li>
        <li className="activity-item">
          <strong>Helpful Tip:</strong>
          <br />
          DIY Dog Treat Recipe
          <br />
          <small>🗓️ Dec 1, 2023</small>
        </li>
        <li className="activity-item">
          <strong>Question:</strong>
          <br />
          Advice for Hyperactive Puppies
          <br />
          <small>🗓️ Dec 20, 2023</small>
        </li>
      </ul>
    </div>
  );
};

export default CommunityActivity;
