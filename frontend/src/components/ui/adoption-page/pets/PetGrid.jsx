import React from 'react';
import './PetGrid.css'
import PetCard from './PetCard';

const PetGrid = ({ pets }) => {
  if (!pets || pets.length === 0) {
    return <p className="no-pets-msg">No adoptable pets found.</p>;
  }

  return (
    <div className="pet-grid">
      {pets.map((pet) => (
        <PetCard key={pet._id} pet={pet} />
      ))}
    </div>
  );
};


export default PetGrid;