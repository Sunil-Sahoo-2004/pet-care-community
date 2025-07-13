import express from 'express';
import {
  createForum,
  deleteForum,
  getAllForums,
  getMyForums,
  updateForum,
} from '../controllers/forum.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const forumRouter = express.Router();

// Get all forums
forumRouter.get('/get-all-forums', authMiddleware, getAllForums);

// Create new forum
forumRouter.post('/create-forums', authMiddleware, createForum);

forumRouter.get('/my-forums', authMiddleware, getMyForums);  
forumRouter.put('/update-forum/:id', authMiddleware, updateForum);  
forumRouter.delete('/delete-forum/:id', authMiddleware, deleteForum);

export default forumRouter;
