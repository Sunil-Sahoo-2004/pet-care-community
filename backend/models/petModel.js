import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: function () { return this.type === 'sell'; }, default: 0 }, 
    image: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['adopt', 'sell'], required: true } 
});

const petModel = mongoose.models.pet || mongoose.model("pet", petSchema);

export default petModel;