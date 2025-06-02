import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] },
  },
  discoveryRadius: { type: Number, default: 10 },
  role: { type: String, enum: ['user', 'admin', 'business'], default: 'user' },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Enable geospatial index on location
userSchema.index({ location: '2dsphere' });

export const userModel = mongoose.models.User || mongoose.model('User', userSchema);