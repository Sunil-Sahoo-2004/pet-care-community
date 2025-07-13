import mongoose from 'mongoose';

const forumSchema = new mongoose.Schema({
  author: {
    name: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  title: String,
  content: String,
  tags: [String],
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ForumModel = mongoose.model('Forum', forumSchema);
