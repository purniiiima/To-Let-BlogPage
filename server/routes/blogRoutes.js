// backend/routes/blogRoutes.js
const express = require('express');
const multer = require('multer');
const { createBlog, getAllBlogs, getBlogById, deleteBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Blog routes
router.post('/create', protect, upload.single('thumbnail'), createBlog); // Protected route
router.get('/', getAllBlogs); // Public route
router.get('/:id', getBlogById); // Public route
router.delete('/:id', protect, deleteBlog); // Protected route

module.exports = router;
