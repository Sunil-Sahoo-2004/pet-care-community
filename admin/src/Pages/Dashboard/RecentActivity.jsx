import React from 'react';
import './RecentActivity.css';
import { activities } from '../../assets/assets';

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((activity, index) => {
          const Icon = activity.icon; // ✅ Assign the component reference here
          return (
            <li key={index}>
              <span className="activity-icon"><Icon /></span>
              <div>
                <p>{activity.message}</p>
                <small>{activity.time}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentActivity;
