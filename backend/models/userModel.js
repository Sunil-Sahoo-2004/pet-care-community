import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ['Admin', 'User'], default: 'User'},
    verified: { type: Boolean },
    cartData: { type: Object, default: {} }
}, {minimize: false})

export const userModel = mongoose.models.User || mongoose.model('User', userSchema)