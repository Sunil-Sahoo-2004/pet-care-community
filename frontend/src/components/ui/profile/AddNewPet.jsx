import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addPet } from '../../../services/petService';
import './AddNewPet.css'

const AddNewPet = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.image) {
      toast.error('Please upload a pet image.');
      return;
    }

    const data = new FormData();
    data.append('name', form.name);
    data.append('species', form.species);
    data.append('breed', form.breed);
    data.append('age', form.age);
    data.append('description', form.description);
    data.append('images', form.image);

    try {
      await addPet(data);
      toast.success('Pet added successfully!');
      onClose(); // Close popup/modal
    } catch (err) {
      toast.error('Failed to add pet', err);
    }
  };

  return (
    <div className="add-pet-popup">
      <div className="popup-content">
        <h3>Add New Pet</h3>
        <form onSubmit={handleSubmit} className="add-pet-form">
          <input type="text" name="name" placeholder="Pet Name" value={form.name} onChange={handleChange} required />
          <input type="text" name="species" placeholder="Species" value={form.species} onChange={handleChange} required />
          <input type="text" name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} />
          <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} />
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          <div className="form-actions">
            <button type="submit" className="submit-btn">Add Pet</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewPet;
