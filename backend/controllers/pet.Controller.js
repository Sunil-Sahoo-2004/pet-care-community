import petModel from "../models/petModel.js"
import fs from 'fs'

// add pets
const addPet = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const pet = new petModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })

    try {
        await pet.save();
        res.json({success: true, message: "Pet added"})
    } catch (error) {
        console.log(error)
        res.json({success : false, message: "Error"})
    }
}

// List all Pets
const listPet = async (req, res) => {
    try {
        const pets = await petModel.find({});

        res.json({success: true, data: pets})
    } catch (error) {
        console.log(error);
        res.json({success: false, message : "Error"})
    }
}

// remove pets
const removePet = async (req, res) => {
    try {
        // find the food model using the id
        const pet = await petModel.findById(req.body.id);
        // Delete the image from the folder
        fs.unlink(`uploads/${pet.image}`, () => {})

        // remove from data base
        await petModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Pet Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export { addPet, listPet, removePet }