import express from 'express'
import { deleteAccount, getProfile, updateProfile } from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js'

const userRouter = express.Router()

// Get own profile
userRouter.get('/me', authMiddleware, getProfile);

// Update own profile
userRouter.put('/update-profile', authMiddleware, updateProfile);

// Set discovery radius & location
// userRouter.put('/radius', );

// Delete account
userRouter.delete('/delete-profile', authMiddleware, deleteAccount);

export default userRouter