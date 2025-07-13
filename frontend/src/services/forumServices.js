import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/forum',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all forum posts
export const getAllForums = async () => {
  const res = await API.get('/get-all-forums');
  return res.data;
};

// Create a new forum post
export const createForum = async (forumData) => {
  const res = await API.post('/create-forums', forumData);
  return res.data;
};

export const getMyForums = async (name) => {
  const res = await API.get(`/my-forums?name=${name}`);
  return res.data;
};

export const updateForum = async (id, data) => {
  const res = await API.put(`/update-forum/${id}`, data);
  return res.data;
};

export const deleteForum = async (id) => {
  const res = await API.delete(`/delete-forum/${id}`);
  return res.data;
};

