import jwt from 'jsonwebtoken'
import mailSender from '../utils/mailSender.js';
import { otpModel } from '../models/otp.model.js';
import bcrypt from 'bcrypt'

const createToken = (id, name, email, role) => {
    return jwt.sign({ id, name, email, role }, process.env.JWT_SECRET)
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
    code: hashedOtp,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000)  // 10 munite
  });
};

// Send successfully registred mail
const sendWelcomeMail = async (user) => {

  await mailSender(
    user.email,
    "You Are success Fully Registred",
    `<h3>Welcome to PetCareCommunity ${user.name}</p>`
  );

};

// Send successfully loged in mail
const sendLoginNotification = async (user) => {
  await mailSender(
    user.email,
    "Login Successful",
    `<h3>Hello ${user.name},</h3><p>You have successfully logged in to PetCareCommunity. If this wasn't you, please change your password immediately.</p>`
  );
};

export { createToken, sendOtp, sendWelcomeMail, sendLoginNotification }