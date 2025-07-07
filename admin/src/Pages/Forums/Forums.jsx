import React from 'react';
import './Forums.css'
import ForumStats from './ForumStats';
import ForumTable from './ForumTable';


const Forums = () => {
  return (
    <div className="forums-page">
      <h2>Forums Management</h2>
      <ForumStats />
      <ForumTable />
    </div>
  );
};

export default Forums;
