import React from 'react';
import './PartnersSection.css';
import { partners } from '../../../../assets/assets';

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2>Our Trusted Partners</h2>
      <div className="partner-slider-wrapper">
        <div className="partner-slider">
          {partners.concat(partners).map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner.img} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
