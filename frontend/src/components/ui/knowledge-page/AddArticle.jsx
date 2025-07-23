import React, { useState, useEffect } from 'react';
import './AddArticle.css';
import { toast } from 'react-toastify';
import { createArticle } from '../../../services/articleServices';

const AddArticle = ({ onArticleAdded }) => {
  const [form, setForm] = useState({
    title: '',
    image: '',
    excerpt: '',
    authorId: ''
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
      setForm(prev => ({ ...prev, authorId: user._id }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createArticle(form);
      toast.success('Article posted successfully');
      setForm({ title: '', image: '', excerpt: '', authorId: form.authorId });
      onArticleAdded();
    } catch (err) {
      toast.error('Failed to post article');
      console.error(err);
    }
  };

  return (
    <form className="add-article-form" onSubmit={handleSubmit}>
      <h3>Add New Article</h3>
      <input
        type="text"
        name="title"
        placeholder="Article Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />
      <textarea
        name="excerpt"
        placeholder="Short Description"
        value={form.excerpt}
        onChange={handleChange}
        rows={3}
        required
      />
      <button type="submit">Post Article</button>
    </form>
  );
};

export default AddArticle;
