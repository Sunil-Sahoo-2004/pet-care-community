import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/users',
  withCredentials: true,
});

export const getProfile = () => API.get('/me');
export const updateProfile = (updatedData) => API.put('/update-profile', updatedData);
export const switchUserRole = () => API.put('/switch-role');
export const deleteAccount = () => API.delete('/delete-profile');