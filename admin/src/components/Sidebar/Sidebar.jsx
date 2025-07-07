// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaComments, FaServicestack, FaUsers, FaFlag, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">

        <NavLink to="/dashboard" className="sidebar-option">
          <FaTachometerAlt className="sidebar-icon" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/forums" className="sidebar-option">
          <FaComments className="sidebar-icon" />
          <p>Forums</p>
        </NavLink>

        <NavLink to="/services" className="sidebar-option">
          <FaServicestack className="sidebar-icon" />
          <p>Services</p>
        </NavLink>

        <NavLink to="/users" className="sidebar-option">
          <FaUsers className="sidebar-icon" />
          <p>Users</p>
        </NavLink>

        <NavLink to="/reports" className="sidebar-option">
          <FaFlag className="sidebar-icon" />
          <p>Reports</p>
        </NavLink>

        <NavLink to="/settings" className="sidebar-option">
          <FaCog className="sidebar-icon" />
          <p>Settings</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
