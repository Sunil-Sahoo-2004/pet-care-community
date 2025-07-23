import React, { useEffect, useState } from "react";
import { getMyArticles, deleteArticle, updateArticle } from "../../../services/articleServices";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./MyArticles.css";
import EditArticleModal from "./EditArticleModal";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [userId, setUserId] = useState(null);

  const fetchArticles = async (id) => {
    try {
      const res = await getMyArticles(id);
      setArticles(res.data);
    } catch (err) {
      toast.error("Failed to fetch your articles");
      console.error("Fetch error:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteArticle(id);
        toast.success("Article deleted successfully");
        fetchArticles(userId);
      } catch (err) {
        toast.error("Failed to delete article");
        console.error(err);
      }
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateArticle(id, updatedData);
      toast.success("Article updated successfully");
      fetchArticles(userId);
    } catch (err) {
      toast.error("Failed to update article");
      console.error(err);
    }
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
      fetchArticles(decoded.id);
    }
  }, []);

  return (
    <div className="my-articles-section">
      <h3>My Articles</h3>
      <div className="article-cards">
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((item) => (
            <div key={item._id} className="article-card">
              <img src={item.image} alt={item.title} />
              <p className="article-label">{item.label || "General"}</p>
              <h4>{item.title}</h4>
              <p className="excerpt">{item.excerpt}</p>
              <div className="article-actions">
                <button onClick={() => setEditingArticle(item)} className="edit-btn">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(item._id)} className="delete-button">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {editingArticle && (
        <EditArticleModal
          article={editingArticle}
          onClose={() => setEditingArticle(null)}
          onSubmit={(updatedData) => {
            handleUpdate(editingArticle._id, updatedData);
            setEditingArticle(null);
          }}
        />
      )}
    </div>
  );
};

export default MyArticles;
