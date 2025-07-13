import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={`http://localhost:5000/uploads/${service.image}`} alt={service.name} />
      <div className="service-info">
        <div className="service-header">
          <h4>{service.name}</h4>
          <span className="tag">{service.category}</span>
        </div>
        <p className="rating">⭐ {service.rating || "4.9"} ({service.reviews || "100 reviews"})</p>
        <p className="description">{service.description?.slice(0, 100)}...</p>
        <p className="location">📍 {service.address}</p>
        <div className="price-row">
          <span className="price">₹{service.price}</span>
          <button className="details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
