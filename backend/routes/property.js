const express = require('express');
const router = express.Router();
const multer = require('multer');
const { publishProperty, getProperties } = require('../controllers/propertyController');
const { authenticate } = require('../middleware/auth');

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

// Route to publish a property with file uploads
router.post('/', authenticate, upload.array('pictures', 10), publishProperty); // Adjust the field name 'pictures' and limit as needed

// Route to get properties
router.get('/', getProperties);

module.exports = router;
