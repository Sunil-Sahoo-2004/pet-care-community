import { ArticleModel } from "../models/article.model.js";

export const createArticle = async (req, res) => {
  try {
    const { title, excerpt, content, image } = req.body;
    const authorId = req.user.id;

    const newArticle = new ArticleModel({
      title,
      excerpt,
      content,
      image,    
      authorId
    });

    await newArticle.save();
    res.status(201).json({ success: true, data: newArticle });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ success: false, message: 'Failed to create article' });
  }
};


export const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: articles });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch articles' });
  }
};

export const getMyArticles = async (req, res) => {
  try {
    const userId = req.user.id;
    const articles = await ArticleModel.find({ authorId: userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: articles });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching your articles' });
  }
};

// DELETE article
export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    await ArticleModel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Article deleted successfully' });
  } catch (err) {
    console.error("Error deleting article:", err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// UPDATE article
export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await ArticleModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.error("Error updating article:", err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};