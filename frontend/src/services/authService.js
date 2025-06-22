import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const registerUser = (data) => API.post('/register', data, { withCredentials: true });
export const loginUser = (data) => API.post('/login', data, { withCredentials: true });
export const verifyOtp = (userId, otp) => API.post('/verify', { userId, otp }, { withCredentials: true });