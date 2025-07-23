import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/articles',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const getAllArticles = async () => {
  const res = await API.get('/all');
  return res.data;
};

export const createArticle = async (data) => {
  const res = await API.post('/create', data);
  return res.data;
};

export const getMyArticles = async () => {
  const res = await API.get('/my-articles'); 
  return res.data;
};

export const deleteArticle = async (id) => {
  const res = await API.delete(`/delete-article/${id}`);
  return res.data;
};

export const updateArticle = async (id, data) => {
  const res = await API.put(`/update-article/${id}`, data);
  return res.data;
};

