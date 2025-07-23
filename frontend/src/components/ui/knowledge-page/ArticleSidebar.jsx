import React from 'react';
import './ArticleSidebar.css';

const ArticleSidebar = ({ onCreateClick }) => {
  return (
    <div className="article-sidebar">
      <div>
        <h4>Categories</h4>
        <div className="categories">
          <span>Cats</span>
          <span>Dogs</span>
          <span>Birds</span>
          <span>Health</span>
          <span>Nutrition</span>
        </div>
      </div>

      <div>
        <h4>Contribute</h4>
        <p>Have insights or experiences? Share them by creating a new article!</p>
      </div>

      <div>
        <button onClick={onCreateClick}>Create New Article</button>
      </div>
    </div>
  );
};

export default ArticleSidebar;
