import React from 'react';
import { FaPen } from 'react-icons/fa';

const ForumPostButton = ({ onClick }) => {
  return (
    <div className="forum-post-button">
      <button onClick={onClick}>
        <FaPen className="icon" />
        <span>Post a New Topic</span>
      </button>
    </div>
  );
};

export default ForumPostButton;
