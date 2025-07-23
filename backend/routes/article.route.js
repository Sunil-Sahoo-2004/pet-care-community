import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js';
import { createArticle, deleteArticle, getAllArticles, getMyArticles, updateArticle } from '../controllers/article.controller.js';

const articleRouter = express.Router()

articleRouter.post('/create', authMiddleware, createArticle);
articleRouter.get('/all', authMiddleware, getAllArticles);
articleRouter.get('/my-articles', authMiddleware, getMyArticles);
articleRouter.delete('/delete-article/:id', authMiddleware, deleteArticle);
articleRouter.put('/update-article/:id', authMiddleware, updateArticle);

export default articleRouter;