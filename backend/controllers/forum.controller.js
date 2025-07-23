import { ForumModel } from "../models/forum.model.js";

// Get all forums
export const getAllForums = async (req, res) => {
  try {
    const forums = await ForumModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: forums });
  } catch (error) {
    console.error('Error fetching forums:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Create forum
export const createForum = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const userId = req.user.id;
    const userName = req.user.name;

    const newForum = new ForumModel({
      author: {
        id: userId,
        name: userName,
      },
      title,
      content,
      tags,
    });

    await newForum.save();

    res.status(201).json({ success: true, message: 'Forum created successfully', data: newForum });
  } catch (error) {
    console.error('Error creating forum:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


// Get my forums
export const getMyForums = async (req, res) => {
  try {
    const userId = req.user.id;
    const forums = await ForumModel.find({ 'author.id': userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: forums });
  } catch (error) {
    console.error('Error fetching user forums:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


// Delete forum
export const deleteForum = async (req, res) => {
  try {
    const { id } = req.params;
    await ForumModel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Forum deleted successfully' });
  } catch (error) {
    console.error('Error deleting forum:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Update forum
export const updateForum = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tags } = req.body;
    const userId = req.user.id;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }
    // Update the forum
    const updatedForum = await ForumModel.findByIdAndUpdate(
      id,
      { title, content, tags },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, message: 'Forum updated successfully', data: updatedForum });
  } catch (error) {
    console.error('Error updating forum:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

