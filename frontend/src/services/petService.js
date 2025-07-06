import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/pets',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Get all pets (for adoption listing)
export const getAllPets = async () => {
  const res = await API.get('/get-all');
  return res.data;
};

// ✅ Get current user's pets
export const getUserPets = async () => {
  const res = await API.get('/my-pets');
  return res.data;
};

// ✅ Get pet by ID
export const getPetById = async (id) => {
  const res = await API.get(`/get-by-id?id=${id}`);
  return res.data;
};

// ✅ Add new pet (with image)
export const addPet = (formData) =>
  API.post('/add-pet', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// ✅ Update pet info (by ID, with image)
export const updatePet = (id, formData) =>
  API.put(`/update-pet?id=${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// ✅ Delete pet by ID
export const deletePet = (id) =>
  API.delete(`/delete-pet`, { data: { id } });

// ✅ Contact pet owner
export const contactPetOwner = (id, message) =>
  API.post(`/${id}/contact`, { message });