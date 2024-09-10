const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const logger = require('../config/logger'); // Assuming you have a logger config

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Set the destination for file uploads
  },
  filename: (req, file, cb) => {
    const safeFileName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.]/g, '-')}`;
    cb(null, safeFileName); // Set the filename
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files (jpeg, jpg, png, gif) under 1MB are allowed!'));
  },
  limits: {
    fileSize: 1 * 1024 * 1024 // 1 MB limit
  }
});

// Middleware to handle Multer errors
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    logger.error(`Multer Error: ${err.message}`, { stack: err.stack });
    return res.status(400).json({ message: err.message });
  } else if (err) {
    logger.error(`Unexpected Error: ${err.message}`, { stack: err.stack });
    return res.status(500).json({ message: 'Server error' });
  }
  next();
});

// Route for user registration with file upload
router.post('/register', upload.single('profilePicture'), async (req, res, next) => {
  try {
    await registerUser(req, res);
  } catch (error) {
    logger.error(`Registration Route Error: ${error.message}`, { stack: error.stack });
    next(error); // Pass the error to the error-handling middleware
  }
});

// Route for user login without file upload
router.post('/login', async (req, res, next) => {
  try {
    await loginUser(req, res);
  } catch (error) {
    logger.error(`Login Route Error: ${error.message}`, { stack: error.stack });
    next(error); // Pass the error to the error-handling middleware
  }
});

module.exports = router;
