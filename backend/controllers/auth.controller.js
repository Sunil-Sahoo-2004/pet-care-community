import { userModel } from "../models/auth.model.js";
import { otpModel } from "../models/otp.model.js";
import { createToken, sendLoginNotification, sendOtp, sendWelcomeMail } from "../services/auth.service.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(403).json({ success: false, message: "All fields are required" })
        }

        if(!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Not a valid email format' })
        }

        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) { return res.status(400).json({ success: false, message:"Password must be strong (min 8 chars, uppercase, lowercase, number, special char)" })}

        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            if (!existingUser.isVerified) {
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
            password : hashPassword
        })

        await newUser.save();

        await sendOtp(newUser);

        const userObj = newUser.toObject();
        delete userObj.password;
        return res.status(201).json({ status: "PENDING", success: true, message: "User Registred for verify an OTP sent to email.", data: userObj });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const verifyOtp = async (req, res) => {
    try {
        const { userId, otp } = req.body;
        console.log("Sending OTP verification", { userId, otp });

        if (!userId || !otp) {
          return res.status(400).json({ success: false, message: "userId and otp are required" });
        }

        const otpRecord = await otpModel.findOne({ userId }).sort({ createdAt: -1 });
        if (!otpRecord) {
          return res.status(400).json({ success: false, message: "OTP not found or expired" });
        }

        const isValid = await bcrypt.compare(otp, otpRecord.code);
        if (!isValid) {
          return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.isVerified) {
            await userModel.findByIdAndUpdate(userId, { isVerified: true });
            await sendWelcomeMail(user);
        } else {
            await sendLoginNotification(user);
        }

        await otpModel.deleteMany({ userId });

        const token = createToken(user._id, user.name, user.email, user.role);
        res.cookie("token", token, {
          httpOnly: false,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie("loggedIn", true, {
            httpOnly: false,     
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "Lax",
        });

        res.status(200).json({ status: "VERIFIED", success: true, message: "OTP verified successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

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
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const adminLogin = (req, res) => {
  const { email, password } = req.body;

  const adminUser = {
    name : 'admin',
    email: 'admin@example.com',
    password: 'admin@123',
    role: 'admin',
  };

  if (email === adminUser.email && password === adminUser.password) {
    const token = jwt.sign(
      { email: adminUser.email, role: adminUser.role },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '1h' }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // use true in production (HTTPS)
      sameSite: "lax", // or "none" if using cross-site cookies with HTTPS
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    return res.json({
      role: adminUser.role,
      message: 'Admin login successful',
    });
  }

  return res.status(401).json({ message: 'Invalid admin credentials' });
};

const googleOAuth = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export { register, verifyOtp, login, adminLogin, googleOAuth, logout }