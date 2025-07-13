import React, { useEffect, useState } from "react";
import { FaHeart, FaCommentDots, FaEye, FaUser } from "react-icons/fa";
import { getAllForums } from "../../../services/forumServices";

const ForumDiscussions = () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const res = await getAllForums();
        setForums(res.data || []);
      } catch (err) {
        console.error("Error fetching forums:", err);
      }
    };
    fetchDiscussions();
  }, []);

  return (
    <div className="forum-discussions">
      <h3>Recent Discussions</h3>
      <div
        className={`discussion-cards-wrapper ${
          forums.length > 3 ? "scrollable" : ""
        }`}
      >
        <div className="discussion-cards">
          {forums.map((post, idx) => (
            <div className="discussion-card" key={idx}>
              <div className="user-info">
                <span>
                  <FaUser /> {post.author?.name || "User"}
                </span>
                <span>
                  {new Date(post.createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
              </div>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <div className="tags">
                {post.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="stats">
                <span>
                  <FaHeart /> {post.likes}
                </span>
                <span>
                  <FaCommentDots /> {post.comments}
                </span>
                <span>
                  <FaEye /> {post.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumDiscussions;
