import React from 'react';
import './ForumStats.css';
import { ForamsStats } from '../../assets/assets';

const ForumStats = () => {
  return (
    <div className="forum-stats">
      {ForamsStats.map((item, i) => (
        <div className="forum-stat-card" key={i}>
          <div className="forum-icon"><item.icon /></div>
          <div>
            <h4>{item.title}</h4>
            <h2>{item.value}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumStats;
