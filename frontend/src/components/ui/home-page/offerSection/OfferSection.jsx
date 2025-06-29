import React from "react";
import "./OfferSection.css";
import { offers } from "../../../../assets/assets";

const OfferSection = () => {
  return (
    <div className="offer-section">
      <h2>What PetConnect Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => {
          const Icon = offer.icon;
          return (
            <div key={index} className="offer-card">
              <div className="icon">
                <Icon size={40} color="#00B4FF" />
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button>Learn More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfferSection;
