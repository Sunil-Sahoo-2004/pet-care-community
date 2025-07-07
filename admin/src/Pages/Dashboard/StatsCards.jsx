import React from 'react';
import './StatsCards.css';
import { stats } from '../../assets/assets';

const StatsCards = () => {
  return (
    <div className="stats-cards">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div className="card" key={index}>
            <div className="card-content">
              <h4>{stat.title}</h4>
              <h2>{stat.value}</h2>
              <p>{stat.change}</p>
            </div>
            <div className="card-icon" style={{ color: stat.color }}>
              <Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
