import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceGrid.css";

const ServiceGrid = ({ services }) => {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
