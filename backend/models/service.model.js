import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category: { type: String, enum: ["Veterinarian", "hostel", "hospital", "grooming", "Pet Supply Shop", "Training", "Pet Boarding1"], required: true },
  description: { type: String },
  address: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  image: { type: String },
  price: { type: Number, required: true, min: 0 },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] },
  },
  verified: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected", "Banned"],
    default: "Pending"
  },
  createdAt: { type: Date, default: Date.now },
});

serviceSchema.index({ location: '2dsphere' });
export const serviceModel = mongoose.models.Service || mongoose.model("Service", serviceSchema)