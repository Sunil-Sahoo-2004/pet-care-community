import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
    name : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
    image : {type: String, required: true},
    category : {type: String, required: true}
});

const petModel = mongoose.models.pet || mongoose.model("pet", petSchema);

export default petModel;