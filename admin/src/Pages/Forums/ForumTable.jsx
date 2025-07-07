import React, { useState } from 'react';
import './ForumTable.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const forumData = [
  {
    title: 'General Pet Discussion',
    category: 'Community',
    posts: 12450,
    members: 5800,
    status: 'Active',
    lastActivity: '2024-07-28',
  },
  {
    title: 'Dog Health & Nutrition',
    category: 'Health',
    posts: 8760,
    members: 3200,
    status: 'Active',
    lastActivity: '2024-07-27',
  },
  {
    title: 'Cat Behavior & Training',
    category: 'Behavior',
    posts: 6520,
    members: 2800,
    status: 'Active',
    lastActivity: '2024-07-26',
  },
  {
    title: 'Exotic Pets Forum',
    category: 'Exotic Pets',
    posts: 3100,
    members: 1100,
    status: 'Active',
    lastActivity: '2024-07-25',
  },
  {
    title: 'Pet Photography & Art',
    category: 'Community',
    posts: 4200,
    members: 1900,
    status: 'Active',
    lastActivity: '2024-07-24',
  },
  {
    title: 'Reptile Care Forum',
    category: 'Exotic Pets',
    posts: 2200,
    members: 800,
    status: 'Active',
    lastActivity: '2024-07-23',
  },
  {
    title: 'Small Animals Forum',
    category: 'Community',
    posts: 3000,
    members: 1200,
    status: 'Active',
    lastActivity: '2024-07-22',
  },
  {
    title: 'Pet Grooming Tips',
    category: 'Health',
    posts: 2900,
    members: 1000,
    status: 'Active',
    lastActivity: '2024-07-21',
  },
  {
    title: 'Aquatic Pets Forum',
    category: 'Exotic Pets',
    posts: 1800,
    members: 700,
    status: 'Active',
    lastActivity: '2024-07-20',
  },
  {
    title: 'Bird Watching & Care',
    category: 'Behavior',
    posts: 3500,
    members: 1500,
    status: 'Active',
    lastActivity: '2024-07-19',
  },
];

const ForumTable = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(forumData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentForums = forumData.slice(startIndex, startIndex + itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="forum-table-section">
      <div className="table-filters">
        <input type="text" placeholder="Search forums by title or description..." />
        <select><option>Categories</option></select>
        <select><option>All Levels</option></select>
        <select><option>All Statuses</option></select>
        <button>Date Range</button>
        <button className="clear">Clear Filters</button>
      </div>

      <table className="forum-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Title</th>
            <th>Category</th>
            <th>Posts</th>
            <th>Members</th>
            <th>Status</th>
            <th>Last Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentForums.map((forum, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{forum.title}</td>
              <td>{forum.category}</td>
              <td>{forum.posts}</td>
              <td>{forum.members}</td>
              <td><span className="status-badge">{forum.status}</span></td>
              <td>{forum.lastActivity}</td>
              <td>
                <FaEdit className="edit-icon" /> &nbsp;
                <FaTrash className="delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-pagination">
        <p>
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, forumData.length)} of {forumData.length} results
        </p>
        <div>
          <span onClick={goToPrevious} className={currentPage === 1 ? 'disabled' : ''}>&lt; Prev</span>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active-page' : ''}
            >
              {index + 1}
            </span>
          ))}
          <span onClick={goToNext} className={currentPage === totalPages ? 'disabled' : ''}>Next &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default ForumTable;
