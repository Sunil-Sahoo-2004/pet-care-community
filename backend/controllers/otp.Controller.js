import mailSender from "../utils/mailSender.js";
import bcrypt from 'bcrypt'
import { otpModel } from "../models/otpModel.js";
import { userModel } from "../models/userModel.js";
import jwt from 'jsonwebtoken'

// Generate and send otp
const sendOtp = async (user) => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

  await mailSender(
    user.email,
    "Your Verification OTP",
    `<h3>Welcome!</h3><p>Your OTP is <strong>${otp}</strong>. It is valid for 5 minutes.</p>`
  );

  const hashedOtp = await bcrypt.hash(otp, 10);

  await otpModel.create({
    userId: user._id,
    otp: hashedOtp,
  });
};

// Generate JSON WEB Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

// verify otp
const verifyOTP = async (req, res) => {
  try {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      return res.status(400).json({ success: false, message: "userId and otp are required" });
    }

    const otpRecord = await otpModel.findOne({ userId }).sort({ createdAt: -1 });
    if (!otpRecord) {
      return res.status(400).json({ success: false, message: "OTP not found or expired" });
    }

    const isValid = await bcrypt.compare(otp, otpRecord.otp);
    if (!isValid) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    await userModel.findByIdAndUpdate(userId, { verified: true });

    await otpModel.deleteMany({ userId });

    const token = createToken(userId)
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ status: "VERIFIED", success: true, message: "User verified successfully", token: token });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};


export { sendOtp, verifyOTP }