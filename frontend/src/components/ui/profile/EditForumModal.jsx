import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ForumModal.css';

const EditForumModal = ({ onClose, onSubmit, forum }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    tags: '',
  });

  useEffect(() => {
    if (forum) {
      setForm({
        title: forum.title || '',
        content: forum.content || '',
        tags: forum.tags ? forum.tags.join(', ') : '',
      });
    }
  }, [forum]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      title: form.title,
      content: form.content,
      tags: form.tags.split(',').map((tag) => tag.trim()),
    };
    onSubmit(forum._id, updatedData); // ✅ Pass ID separately
    onClose();
  };

  return (
    <div className="forum-modal-overlay">
      <div className="forum-modal">
        <button className="forum-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h3>Edit Forum Post</h3>
        <form onSubmit={handleSubmit} className="forum-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Your content..."
            value={form.content}
            onChange={handleChange}
            rows={4}
            required
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditForumModal;
