import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const EditForumModal = ({ forum, onClose, onSubmit }) => {
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
        tags: forum.tags?.join(', ') || '',
      });
    }
  }, [forum]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      title: form.title,
      content: form.content,
      tags: form.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };
    onSubmit(updatedData);
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h3>Edit Forum Post</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
            rows="4"
            required
          />
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditForumModal;
