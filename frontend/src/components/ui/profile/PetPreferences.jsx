import React from "react";
import { pet_list } from "../../../assets/assets";

const PetPreferences = () => {
  return (
    <div className="my-beloved-pets-section">
      <div className="my-beloved-pets-section-heading">
        <h3>My Beloved Pets</h3>
        <button className="add-btn">+ Add New Pet</button>
      </div>
      <div className="pets">
        {pet_list.map((pet) => (
          <div className="pet-card" key={pet._id}>
            <div className="pet-image">
              <img src={pet.image} alt={pet.name} className="image" />
            </div>
            <h4>{pet.name}</h4>
            <p className="pet-desc">
              {pet.breed}, {pet.age}
            </p>
            <p className="pet-description">{pet.description}</p>
            <button className="view-btn">View Pet Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetPreferences;
