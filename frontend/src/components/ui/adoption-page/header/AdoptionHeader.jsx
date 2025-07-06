import React from 'react';
import './AdoptionHeader.css';
import { assets } from '../../../../assets/assets';


const AdoptionHeader = () => {
  return (
    <div className="adoption-header">
      <div className="adoption-text">
        <h2>Find Your Fur-ever Friend Today!</h2>
        <p>
          Browse hundreds of adoptable pets eagerly waiting for a loving home. <br />
          Discover companions of all shapes, sizes, and personalities.
        </p>
        <button className="adoption-btn">Start Your Adoption Journey →</button>
      </div>
      <div className="adoption-image">
        <img src={assets.AdoptionHeader} alt="Adoptable Pet" />
      </div>
    </div>
  );
};

export default AdoptionHeader;
