const User = require('../models/User');
const { generateToken } = require('../middleware/auth'); // Import generateToken
const bcrypt = require('bcryptjs');

// Middleware to handle file uploads
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Function to handle user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, description, password } = req.body;
    const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({ name, email, description, password, profilePicture });

    // Hash the password before saving
    user.password = await bcrypt.hash(password, 10);
    
    await user.save();

    // Send a response indicating success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// Function to handle user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !await user.validatePassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    
    res.status(200).json({ message: 'Login successful', redirectUrl: '/profile' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during login' });
  }
};

module.exports = { registerUser, loginUser };
