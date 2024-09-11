const Blog = require('../models/Blog');

// blogController.js
const Blog = require('../models/Blog');  // Ensure this path is correct

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    // Create a new blog post
    const newPost = new Blog({ title, content });
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (err) {
    console.error('Error in createPost:', err);  // Log detailed error
    res.status(500).json({ message: 'Server error' });
  }
};
