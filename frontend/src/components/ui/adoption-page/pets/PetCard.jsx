import React from "react";
import "./PetCard.css";
import { FaHeart } from "react-icons/fa";
import Button from "../../../../atoms/button/Button";


const PetCard = ({ pet }) => {
  const formatLocation = (location) => {
    if (!location || !location.coordinates) return "Unknown";
    const [lng, lat] = location.coordinates;
    return `📍 ${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  };

  return (
    <div className="adopt-card">
      <div className="adopt-card-img-wrapper">
        <img
          src={`http://localhost:5000/uploads/${pet.images?.[0]}`}
          alt={pet.name}
          className="adopt-card-img"
        />
        <button className="adopt-fav-btn">
          <FaHeart />
        </button>
      </div>
      <div className="adopt-card-content">
        <h4 className="adopt-card-title">{pet.name}</h4>
        <p className="adopt-card-sub">{pet.breed} • {pet.species}</p>
        <p className="adopt-card-meta">
          {pet.age} years old <span>·</span> {formatLocation(pet.location)}
        </p>

        <Button
          text="View Profile"
          className="adopt-card-btn"
          onClick={() => console.log("View Profile clicked")}
        />
      </div>
    </div>
  );
};

export default PetCard;
