import React, { useEffect, useState } from 'react';
import './Adoption.css';
import AdoptionHeader from '../../components/ui/adoption-page/header/AdoptionHeader';
import { toast } from 'react-toastify';
import FilterSidebar from '../../components/ui/adoption-page/pets/FilterSidebar';
import PetGrid from '../../components/ui/adoption-page/pets/PetGrid';
import { getAllPets } from '../../services/petService';

const Adoption = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await getAllPets();
        setPets(res.data || []);
      } catch (err) {
        toast.error("Failed to fetch pets", err);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="adoption">
      <AdoptionHeader />
      <div className="adoption-content">
        <FilterSidebar />
        <div className="pet-list-section">
          <div className="adoption-list-header">
            <h3>Adoptable Pets ({pets.length})</h3>
            <select className="sort-dropdown">
              <option>Sort by: Latest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Name</option>
            </select>
          </div>
          <PetGrid pets={pets} />
        </div>
      </div>
    </div>
  );
};

export default Adoption;
