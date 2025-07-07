import React from 'react';
import './SecurityAlerts.css';
import { alerts } from '../../assets/assets';

const SecurityAlerts = () => (
  <div className="security-alerts">
    <h3>Security & Alerts</h3>
    <ul>
      {alerts.map((alert, index) => (
        <li key={index} className={`alert ${alert.severity.toLowerCase()}`}>
          <div>
            <p>{alert.message}</p>
            <small>{alert.time}</small>
          </div>
          <span className="badge">{alert.severity}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SecurityAlerts;
