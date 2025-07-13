import React, { useState } from 'react';
import './AddNewService.css';
import { createService } from '../../../services/serviceService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewService = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    address: '',
    contactEmail: '',
    contactPhone: '',
    price: '',
    images: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({ ...formData, images: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      await createService(data);
      toast.success('Service created successfully');
      setTimeout(() => {
        onClose(); // Close modal and refresh
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error('Failed to create service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-service-modal">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="modal-content">
        <h2>Add New Service</h2>

        <form onSubmit={handleSubmit} className="add-service-form">
          <input type="text" name="name" placeholder="Service Name" onChange={handleChange} required />
          <select name="category" onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Veterinarian">Veterinarian</option>
            <option value="hostel">Hostel</option>
            <option value="hospital">Hospital</option>
            <option value="grooming">Grooming</option>
            <option value="Pet Supply Shop">Pet Supply Shop</option>
            <option value="Training">Training</option>
            <option value="Pet Boarding">Pet Boarding</option>
          </select>
          <textarea name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} />
          <input type="number" name="price" placeholder="Service Fee (₹)" onChange={handleChange} required />
          <input type="email" name="contactEmail" placeholder="Contact Email" onChange={handleChange} />
          <input type="tel" name="contactPhone" placeholder="Contact Phone" onChange={handleChange} />
          <input type="file" name="images" accept="image/*" onChange={handleChange} required />

          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Add Service'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
