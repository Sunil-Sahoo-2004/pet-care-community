import express from 'express'
import { bookService, createService, deleteService, getNearbyServices, getServiceById, getServices, updateService } from '../controllers/service.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js'

const serviceRouter = express.Router()

// Get services near location
serviceRouter.get('/get-nearby-services', getNearbyServices);

// get all services
serviceRouter.get('/get-all', getServices);

// Get single service
serviceRouter.get('/get-service/:id', getServiceById);

// Create service
serviceRouter.post('/create-service', authMiddleware, createService);

// Update service info (owner only)
serviceRouter.put('/update/:id', authMiddleware, updateService);

// Delete service
serviceRouter.delete('/delete/:id', authMiddleware, deleteService);

// Book an appointment
serviceRouter.post('/:id/book', bookService);

export default serviceRouter