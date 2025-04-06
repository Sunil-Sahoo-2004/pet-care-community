import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sunilSahoo:70290036@cluster0.axsib7p.mongodb.net/pet-care-community').then(() => console.log("DB Connected...."));
}