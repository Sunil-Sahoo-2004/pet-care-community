import express from 'express'
import { addPet, listPet, removePet } from '../controllers/pet.Controller.js';
import multer from 'multer'

const petRouter = express.Router();

// Image Storage Engine (middleware)
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

petRouter.post("/add", upload.single("image"), addPet)
petRouter.get("/list", listPet)
petRouter.post("/remove", removePet)

export default petRouter;