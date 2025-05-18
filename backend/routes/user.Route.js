import express from 'express'
import { loginUser, registerUser } from '../controllers/user.Controller.js'
import { verifyOTP } from '../controllers/otp.Controller.js'

const userRouter = express()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/verifyOTP', verifyOTP)

export default userRouter