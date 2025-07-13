import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateForumModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    author: '',
    title: '',
    content: '',
    tags: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const forumData = {
      author: { name: form.author },
      title: form.title,
      content: form.content,
      tags: form.tags.split(',').map((tag) => tag.trim()),
    };

    try {
      await onSubmit(forumData); // trigger API call via prop
      toast.success('Forum post created successfully!');
      onClose();
    } catch (err) {
      toast.error('Failed to create forum post!', err);
    }
  };

  return (
    <div className="forum-modal-overlay">
      <div className="forum-modal">
        <button className="forum-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h3>Create New Forum Post</h3>
        <form onSubmit={handleSubmit} className="forum-form">
          <input
            type="text"
            name="author"
            placeholder="Your Name"
            value={form.author}
            onChange={handleChange}
            required
          />
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
            placeholder="What's on your mind?"
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
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateForumModal;
