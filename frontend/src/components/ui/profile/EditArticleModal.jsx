import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./EditArticleModal.css";
import { toast } from "react-toastify";

const EditArticleModal = ({ article, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    image: "",
    excerpt: "",
  });

  useEffect(() => {
    if (article) {
      setForm({
        title: article.title,
        image: article.image,
        excerpt: article.excerpt,
      });
    }
  }, [article]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(form); 
      toast.success("Article updated successfully!");
    } catch (err) {
      toast.error("Failed to update article.", err);
    }
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h3>Edit Article</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows="4"
            placeholder="Excerpt"
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditArticleModal;
