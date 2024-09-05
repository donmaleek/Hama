const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', loginUser);

module.exports = router;
