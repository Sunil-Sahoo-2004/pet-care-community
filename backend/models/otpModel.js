import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 60 * 5 } // The document will be automatically deleted after 5 minutes of its creation time
})

export const otpModel = mongoose.models.OTP || mongoose.model("OTP", otpSchema)