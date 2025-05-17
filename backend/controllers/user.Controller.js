import { otpModel } from "../models/otpModel.js";
import { userModel } from '../models/userModel.js';
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mailSender from "../utils/mailSender.js";

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(403).json({ success: false, message: "All fields are required" })
        }

        if(!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Not a valid email format' })
        }

        if (!validator.isStrongPassword(password, { minLength: 8 })) {
            return res.status(400).json({ success: false, message: "Password must be strong (min 8 chars, uppercase, lowercase, number, special char)" })
        }

        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            if (!existingUser.verified) {
                await otpModel.deleteMany({ userId: existingUser._id });
                await userModel.findByIdAndDelete(existingUser._id);
            } else {
                return res.status(400).json({ success: false, message: "User already exists and verified" });
            }
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name : name,
            email : email,
            password : hashPassword,
            role: "User",
            verified: false
        })

        await newUser.save();

        await sendOtp(newUser);

        const userObj = newUser.toObject();
        delete userObj.password;
        return res.status(201).json({ status: "PENDING", success: true, message: "User registered. OTP sent to email.", data: userObj });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error", error: error})
    }
}

// Generate JSON WEB Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

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

export { registerUser, verifyOTP }