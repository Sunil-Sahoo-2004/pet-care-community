import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js';
import roleMiddleware from '../middlewares/role.middleware.js';
import { banUser, getAllUsers, getDashboardStats, getPendingServices, verifyService } from '../controllers/admin.controller.js';

const adminRouter = express.Router()

const adminOnly = [authMiddleware, roleMiddleware('admin')];

// Admin dashboard stats
adminRouter.get('/dashboard', adminOnly, getDashboardStats)

// Manage users
adminRouter.get('/users', adminOnly, getAllUsers)
adminRouter.put('/users/:id/ban', adminOnly, banUser)

// Review and verify services
adminRouter.get('/services/pending', adminOnly, getPendingServices)
adminRouter.put('/services/:id/verify', adminOnly, verifyService)

// Handle reported forum posts
adminRouter.get('/reports', adminOnly);
adminRouter.delete('/forum/:id', adminOnly);

export default adminRouter;