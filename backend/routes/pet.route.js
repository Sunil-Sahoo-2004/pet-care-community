import express from 'express'
import multer from 'multer'
import { addPet, contactPetOwner, deletePet, getAllPet, getMyPets, getPetById, updatePet } from '../controllers/pet.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const petRouter = express.Router()

// Image Storage Engine (middleware)
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

// Get all pets
petRouter.get('/get-all', getAllPet);

// Get single pet by ID
petRouter.get('/get-by-id', getPetById);

// Get my pets
petRouter.get('/my-pets', authMiddleware, getMyPets );

// Add a new pet 
petRouter.post('/add-pet', authMiddleware, upload.single("images"), addPet);

// Update pet info
petRouter.put('/update-pet', authMiddleware, upload.single('images'), updatePet);

// Delete pet 
petRouter.delete('/delete-pet', authMiddleware, deletePet);

// Contact pet owner
petRouter.post('/:id/contact', authMiddleware, contactPetOwner);

export default petRouter