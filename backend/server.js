import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/db.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import petRouter from './routes/pet.route.js';
import serviceRouter from './routes/service.route.js';
import forumRouter from './routes/forum.route.js';
import adminRouter from './routes/admin.route.js';
import articleRouter from './routes/article.route.js';

dotenv.config();

const app = express();
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// Middlewares
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Database
connectDB();

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/pets', petRouter);
app.use('/api/services', serviceRouter);
app.use('/api/forum', forumRouter);
app.use('/api/admin', adminRouter);
app.use('/api/articles', articleRouter);

// Static
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server started at: http://localhost:${process.env.PORT}`);
});
