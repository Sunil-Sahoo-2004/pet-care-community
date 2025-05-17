import express from 'express'
import { registerUser, verifyOTP } from '../controllers/user.Controller.js'

const userRouter = express()

userRouter.post('/register', registerUser)
userRouter.post('/verifyOTP', verifyOTP)

export default userRouter