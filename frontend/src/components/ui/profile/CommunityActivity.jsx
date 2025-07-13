import React, { useEffect, useState } from 'react';
import { deleteForum, getMyForums, updateForum } from '../../../services/forumServices';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import EditForumModal from './EditForumModal';

const CommunityActivity = ({ userName }) => {
  const [forums, setForums] = useState([]);
  const [editingForum, setEditingForum] = useState(null);

  const fetchForums = async () => {
    try {
      const res = await getMyForums(userName);
      setForums(res.data);
    } catch (err) {
      toast.error('Failed to fetch your forums', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this forum?')) {
      try {
        await deleteForum(id);
        toast.success('Forum deleted');
        fetchForums();
      } catch (err) {
        toast.error('Failed to delete forum', err);
      }
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateForum(id, updatedData);
      toast.success('Forum updated successfully');
      fetchForums();
    } catch (err) {
      toast.error('Failed to update forum', err);
    }
  };

  useEffect(() => {
    if (userName) fetchForums();
  }, [userName]);

  return (
    <div className="community-activity-section">
      <h3>My Forum Posts</h3>
      <ul className="activity-list">
        {forums.length === 0 ? (
          <li className="activity-item">No forums yet.</li>
        ) : (
          forums.map((forum) => (
            <li className="activity-item" key={forum._id}>
              <strong>{forum.title}</strong>
              <br />
              {forum.content}
              <br />
              <small>🗓️ {new Date(forum.createdAt).toLocaleDateString()}</small>
              <div style={{ marginTop: '0.5rem' }}>
                <button className="edit-btn" onClick={() => setEditingForum(forum)}>
                  <FaEdit />
                </button>
                <button className="delete-button" onClick={() => handleDelete(forum._id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {editingForum && (
        <EditForumModal
          forum={editingForum}
          onClose={() => setEditingForum(null)}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
};

export default CommunityActivity;
