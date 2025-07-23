import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../../services/articleServices";
import './ArticleList.css'


const ArticleList = ({ refresh }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await getAllArticles();
        setArticles(res.data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };
    fetchArticles();
  }, [refresh]);

  return (
    <div className="articals">
      {articles.map((article) => (
        <div key={article._id} className="article-card">
          <img src={article.image} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <div className="date">
            Posted on {new Date(article.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
