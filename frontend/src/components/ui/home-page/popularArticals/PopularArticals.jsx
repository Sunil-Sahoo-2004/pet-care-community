import React from "react";
import "./PopularArticals.css";
import { articles } from "../../../../assets/assets";

const PopularArticles = () => {
  return (
    <div className="popular-articles">
      <h2>Popular Pet Care Articles</h2>
      <div className="articles-grid">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;
