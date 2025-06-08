import mongoose from "mongoose";

// Create connection
export const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL).then(() => console.log("DB connected..."))
}