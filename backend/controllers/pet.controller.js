import { petModel } from "../models/pet.model.js"
import fs from 'fs'
import { contactPetOwnerService } from "../services/pet.service.js"
import path from "path"

// get all pet
const getAllPet = async (req, res) => {
    try {
        const pets = await petModel.find({})
        res.status(200).json({ success: true, data: pets })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error"})
    }
}

// get-pet-by-id
const getPetById = async (req, res) => {
    try {
        const { petId } = req.body
        const pet = await petModel.findById(petId)
        if (!pet) {
            return res.status(404).json({ success: false, message: "Pet not found" })
        }
        res.status(200).json({ success: true, data: pet })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

// add-pet
const addPet = async (req, res) => {
    try {
        let image_filename = `${req.file.filename}`;
        const owner = req.user.id
        const { name, species, breed, age, description, location } = req.body
        if (!name || !species) {
            return res.status(403).json({ success: false, message: "name, and species fields required" })
        }

        const existingPet = await petModel.findOne({ owner, name });
        if (existingPet) {
            fs.unlink(`uploads/${image_filename}`, () => {})
            return res.status(409).json({ success: false, message: "A pet with this name already exists for this owner" });
        }

        const newPet = new petModel({
            owner: owner,
            name: name,
            species: species,
            breed: breed,
            age: age,
            description: description,
            images: image_filename,
            location: location
        });

        const savedPet = await newPet.save();
        res.status(201).json({ success: true, data: savedPet });

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }

}

// update pet
const updatePet = async (req, res) => {
    try {
        const { petId } = req.body;
        const updateData = req.body;

        const pet = await petModel.findById(petId);
        if (!pet) {
            return res.status(404).json({ success: false, message: "Pet not found" });
        }

        const isOwner = pet.owner.toString() === req.user.id.toString();
        const isAdmin = req.user.role === 'admin';

        if (!isOwner && !isAdmin) {
            let image_filename = `${req.file.filename}`;
            fs.unlink(`uploads/${image_filename}`, () => {})
            return res.status(403).json({ success: false, message: "Unauthorized" });
        }

        if (req.file) {
            const newImage = req.file.filename;
            updateData.images = [newImage];

            if (pet.images?.[0]) {
                fs.unlink(path.join('uploads', pet.images[0]), (err) => {
                    if (err) console.log("Old image delete failed:", err);
                });
            }
        }

        const updatedPet = await petModel.findByIdAndUpdate(petId, updateData, { new: true });
        res.status(200).json({ success: true, message: "Pet updated successfully", data: updatedPet });
    } catch (error) {
        console.error("Update pet error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// delete pet
const deletePet = async (req, res) => {
    try {
        const pet = await petModel.findById(req.body.id);

        if (!pet) {
            return res.status(404).json({ success: false, message: 'Pet not found' });
        }

        const isOwner = pet.owner.toString() === req.user.id.toString();
        const isAdmin = req.user.role === 'admin';

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ success: false, message: "Unauthorized" });
        }

        fs.unlink(`uploads/${pet.images}`, () => {})
        
        await petModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "pet Removed"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

// contact pet owner
const contactPetOwner = async (req, res) => {
    try {
        const petId = req.params.id;
        const { message } = req.body;

        const senderName = req.user.name;
        const senderEmail = req.user.email;
        
        // Validate required fields
        if (!senderName || !senderEmail || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const response = await contactPetOwnerService({ petId, senderName, senderEmail, message });
        res.status(200).json({ success: true, message: "Mail send successfull", response: response });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export { getAllPet, getPetById, addPet, updatePet, deletePet, contactPetOwner }