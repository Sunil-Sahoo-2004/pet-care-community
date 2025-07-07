import React from 'react';
import './DashboardHeader.css';
import { FaSearch } from 'react-icons/fa';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div>
        <h2>Admin Dashboard</h2>
        <p>Overview of your Pet Care Community Platform</p>
      </div>
    </div>
  );
};

export default DashboardHeader;