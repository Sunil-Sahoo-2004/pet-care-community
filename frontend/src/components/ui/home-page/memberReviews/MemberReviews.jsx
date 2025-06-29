import React, { useEffect, useState } from "react";
import "./MemberReviews.css";
import { reviews } from "../../../../assets/assets";

const MemberReviews = () => {
  const [page, setPage] = useState(0);
  const [maxPerSlide, setMaxPerSlide] = useState(4);

  useEffect(() => {
    const updateMaxPerSlide = () => {
      setMaxPerSlide(window.innerWidth <= 768 ? 1 : 4);
    };

    updateMaxPerSlide();
    window.addEventListener("resize", updateMaxPerSlide);
    return () => window.removeEventListener("resize", updateMaxPerSlide);
  }, []);

  const totalPages = Math.ceil(reviews.length / maxPerSlide);

  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="member-reviews">
      <h2 className="section-title">What Our Members Say</h2>

      <div className="slider-wrapper-multi">
        <div
          className="slider-multi"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div className="slide-page" key={i}>
              {reviews
                .slice(i * maxPerSlide, (i + 1) * maxPerSlide)
                .map((review, index) => (
                  <div className="review-card" key={index}>
                    <div className="user-info">
                      <img src={review.img} alt={review.name} />
                      <div>
                        <h4>{review.name}</h4>
                        <p className="role">{review.role}</p>
                      </div>
                    </div>
                    <p className="review-text">
                      <i>{review.text}</i>
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === page ? "active" : ""}`}
              onClick={() => setPage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MemberReviews;
