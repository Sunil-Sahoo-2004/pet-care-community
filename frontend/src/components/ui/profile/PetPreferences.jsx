import React, { useEffect, useState } from "react";
import { getUserPets, deletePet } from "../../../services/petService";
import { toast } from "react-toastify";
import AddNewPet from "./AddNewPet";
import { assets } from "../../../assets/assets";

const PetPreferences = () => {
  const [pets, setPets] = useState([]);
  const [showAddPet, setShowAddPet] = useState(false);

  const fetchPets = async () => {
    try {
      const res = await getUserPets();
      setPets(res.data || []);
    } catch (err) {
      toast.error("Failed to fetch pets.", err);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (petId) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        await deletePet(petId);
        toast.success("Pet deleted successfully!");
        fetchPets();
      } catch (err) {
        toast.error("Failed to delete pet.", err);
      }
    }
  };

  return (
    <div className="my-beloved-pets-section">
      <div className="my-beloved-pets-section-heading">
        <h3>My Beloved Pets</h3>
        <button className="add-btn" onClick={() => setShowAddPet(true)}>
          + Add New Pet
        </button>
      </div>

      {showAddPet && (
        <AddNewPet
          onClose={() => {
            setShowAddPet(false);
            fetchPets();
          }}
        />
      )}

      <div className="pets">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div className="pet-card" key={pet._id}>
              <div className="pet-image">
                <img
                  src={`http://localhost:5000/uploads/${pet.images?.[0]}`}
                  alt={pet.name}
                  className="image"
                />
              </div>
              <h4>{pet.name}</h4>
              <p className="pet-desc">
                {pet.breed || "Unknown"}, {pet.age || "?"} years
              </p>
              <p className="pet-description">{pet.description}</p>
              <button
                  className="delete-icon"
                  onClick={() => handleDelete(pet._id)}
                >
                  <img src={assets.delete_icon} alt="" />
                </button>
              <button className="view-btn">View Pet Profile</button>
            </div>
          ))
        ) : (
          <p>No pets found.</p>
        )}
      </div>
    </div>
  );
};

export default PetPreferences;
