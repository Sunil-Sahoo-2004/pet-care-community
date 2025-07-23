import React from 'react';
import './KnowledgeHeader.css';
import { assets } from '../../../assets/assets';

const KnowledgeHeader = () => {
  return (
    <div className="knowledge-header-container">
      <h1>Your Ultimate Pet Care Resource</h1>
      <p>
        Dive into our extensive library of articles, tips, and guides on pet health,
        behavior, and training. Empower yourself with knowledge to provide the best
        care for your beloved companions.
      </p>
      <img src={assets.knoladge_header} alt="Cat Reading" className="header-image" />
      <button className="explore-btn">Explore Articles</button>
    </div>
  );
};

export default KnowledgeHeader;
