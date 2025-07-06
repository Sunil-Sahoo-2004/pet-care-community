import express from 'express'
import { googleOAuth, login, logout, register, verifyOtp } from '../controllers/auth.controller.js';

const authRouter = express.Router()

// User registration 
authRouter.post('/register', register);

// OTP verification 
authRouter.post('/verify', verifyOtp);

// Login
authRouter.post('/login', login);

// logout
authRouter.post('/logout', logout)

// Google OAuth 
authRouter.get('/google', googleOAuth);


export default authRouter