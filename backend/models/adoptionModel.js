import mongoose from 'mongoose'

const adoptionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    pets: { type: Array, required: true },
    message: { type: String },
    status: { type: String, default: "pending" },
    date: { type: Date, default: Date.now },
    approved: { type: Boolean, default: false }
});

const AdoptionModel = mongoose.models.adoption || mongoose.model('adoption', adoptionSchema);
export default AdoptionModel;