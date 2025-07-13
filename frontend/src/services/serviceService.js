import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/services',
  withCredentials: true,
});

export const getMyServices = async () => {
  const res = await API.get('/my-services');
  return res.data.services;
};

export const deleteService = async (serviceId) => {
  const res = await API.delete(`/delete/${serviceId}`);
  return res.data;
};

export const createService = async (formData) => {
  const res = await API.post('/create-service', formData);
  return res.data;
};