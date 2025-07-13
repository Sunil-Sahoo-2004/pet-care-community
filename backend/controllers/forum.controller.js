import { ForumModel } from "../models/forum.model.js";


export const getAllForums = async (req, res) => {
  try {
    const forums = await ForumModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: forums });
  } catch (error) {
    console.error('Error fetching forums:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const createForum = async (req, res) => {
  try {
    const { author, title, content, tags } = req.body;

    const newForum = new ForumModel({
      author,
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


export const getMyForums = async (req, res) => {
  try {
    const userId = req.user._id; 
    const forums = await ForumModel.find({ 'author.userId': userId }).sort({ createdAt: -1 });
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

    if (!id) {
      return res.status(400).json({ success: false, message: 'Forum ID is required' });
    }

    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    const updatedForum = await ForumModel.findByIdAndUpdate(
      id,
      { title, content, tags },
      { new: true, runValidators: true }
    );

    if (!updatedForum) {
      return res.status(404).json({ success: false, message: 'Forum not found' });
    }

    res.status(200).json({ success: true, message: 'Forum updated successfully', data: updatedForum });
  } catch (error) {
    console.error('Error updating forum:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
