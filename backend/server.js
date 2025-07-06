import express from 'express'
import dotenv from 'dotenv'
import cros from 'cors'
import path from 'path';
import { connectDB } from './config/db.js'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import petRouter from './routes/pet.route.js'
import serviceRouter from './routes/service.route.js'
import cookieParser from 'cookie-parser';
import forumRouter from './routes/forum.route.js'
import adminRouter from './routes/admin.route.js'
import articleRouter from './routes/article.route.js'

// config
dotenv.config()

// set exptess app
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cros({ origin: 'http://localhost:5173', credentials: true }))
app.use(cookieParser());

// db connection
connectDB()

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/pets', petRouter);
app.use('/api/services', serviceRouter);
app.use('/api/forum', forumRouter); // pending
app.use('/api/admin', adminRouter); // working.......
app.use('/api/articles', articleRouter); // pending

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server started on : http://localhost:${process.env.PORT}`)
})