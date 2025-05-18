import { otpModel } from "../models/otpModel.js";
import { userModel } from '../models/userModel.js';
import validator from 'validator'
import bcrypt from 'bcrypt'
import { sendOtp } from "./otp.Controller.js";
import { response } from "express";


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
        return res.status(201).json({ status: "PENDING", success: true, message: "User Registred for verify an OTP sent to email.", data: userObj });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error", error: error})
    }
}

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(403).json({ success: false, message: "All the fields are required"})
    } 

    const user = await userModel.findOne({email})
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" })
    }

    await sendOtp(user)
    const userObj = user.toObject();
    delete userObj.password;
    return res.status(200).json({ status: "PENDING", success: true, message: "user Loged In For veriy an OTP sent to email.", data: userObj });

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal Server Error ", error: error})
  }
}



export { registerUser, loginUser }