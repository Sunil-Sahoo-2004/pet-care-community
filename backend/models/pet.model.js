import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  species: { type: String, required: true }, 
  breed: { type: String },
  age: { type: Number },
  description: { type: String },
  images: [String],
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }, 
  },
  createdAt: { type: Date, default: Date.now },
});

petSchema.index({ location: '2dsphere' });

export const petModel = mongoose.models.Pet || mongoose.model('Pet', petSchema);
