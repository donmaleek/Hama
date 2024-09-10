const User = require('../models/User');  // Ensure correct path to your User model
const { generateToken } = require('../middleware/auth');  // Ensure correct path to your auth middleware
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const logger = require('../config/logger'); // Assuming you have a logger config

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Function to handle user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, description, password } = req.body;
    const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;  // Handling profile picture

    // Check if the user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      logger.warn(`Registration attempt with existing email: ${email}`);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      description,
      password: hashedPassword,
      profilePicture
    });

    // Generate JWT token for the new user (if token generation is needed)
    const token = generateToken(newUser);

    // Send a success response with the user data and token (if applicable)
    res.status(201).json({ 
      message: 'User registered successfully', 
      user: newUser, 
      token 
    });
  } catch (error) {
    logger.error(`Error registering user: ${error.message}`, { stack: error.stack });
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};

// Function to handle user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      logger.warn(`Login attempt with non-existent email: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      logger.warn(`Failed login attempt for email: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a token for the authenticated user
    const token = generateToken(user);

    // Set the token in an HTTP-only cookie (secure in production)
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.status(200).json({ 
      message: 'Login successful', 
      token,  // Include token if needed in the frontend
      redirectUrl: '/profile' 
    });
  } catch (error) {
    logger.error(`Error during user login: ${error.message}`, { stack: error.stack });
    res.status(500).json({ message: 'Server error during login', error: error.message });
  }
};

module.exports = { registerUser, loginUser };
