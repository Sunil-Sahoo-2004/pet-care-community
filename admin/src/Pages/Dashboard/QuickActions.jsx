import React from 'react';
import './QuickActions.css';
import { quickActions } from '../../assets/assets';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="quick-action-buttons">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button key={index} className="quick-action-btn">
              <Icon />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
