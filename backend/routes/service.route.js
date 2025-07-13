import express from 'express'
import multer from 'multer'
import { bookService, createService, getMyServices, deleteService, getNearbyServices, getServiceById, getServices, updateService } from '../controllers/service.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js'

const serviceRouter = express.Router()

// Image Storage Engine (middleware)
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

// Get services near location
serviceRouter.get('/get-nearby-services', getNearbyServices);

// get all services
serviceRouter.get('/get-all', getServices);

// Get single service
serviceRouter.get('/get-service/:id', getServiceById);

// get all my services
serviceRouter.get('/my-services', authMiddleware, getMyServices);

// Create service
serviceRouter.post('/create-service', authMiddleware, upload.single("images"), createService);

// Update service info (owner only)
serviceRouter.put('/update/:id', authMiddleware, updateService);

// Delete service
serviceRouter.delete('/delete/:id', authMiddleware, deleteService);

// Book an appointment
serviceRouter.post('/:id/book', authMiddleware, bookService);

export default serviceRouter