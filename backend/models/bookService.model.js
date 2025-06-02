import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  note: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const bookingModel = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)