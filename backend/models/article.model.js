import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String },
  image: { type: String },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const ArticleModel = mongoose.model('Article', articleSchema);