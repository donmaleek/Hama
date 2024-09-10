const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const winston = require('winston');
const cors = require('cors'); // Import cors
const userRouter = require('./routes/user');
const propertyRouter = require('./routes/property');
const sequelize = require('./config/sequelize');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});

// Configure Multer for file uploads with security enhancements
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const safeFileName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.]/g, '-')}`;
    cb(null, safeFileName);
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
    const error = new Error('Only image files (jpeg, jpg, png, gif) under 1MB are allowed!');
    logger.error('File upload error: ' + error.message);
    cb(error);
  },
  limits: {
    fileSize: 1 * 1024 * 1024 // 1 MB limit
  }
});

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Slow down after certain requests
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 50, // Start slowing down after 50 requests
  delayMs: () => 500
});

// Middleware
app.use(helmet()); // Security headers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(limiter);
app.use(speedLimiter);

// CORS Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend
  credentials: true
}));

app.use('/uploads', express.static(uploadsDir, {
  dotfiles: 'deny',
  etag: false,
  setHeaders: (res, path) => {
    res.set('X-Content-Type-Options', 'nosniff');
  }
}));

// Routes
app.use('/api/users', userRouter);
app.use('/api/properties', propertyRouter);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Hama Bwana API');
});

// Database connection using Sequelize
sequelize.sync()
  .then(() => {
    logger.info('Connected to the database');
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('Database connection error: ', err.message);
    process.exit(1); // Exit process with failure
  });

// Error handling middleware for Multer and other errors
app.use((err, req, res, next) => {
  // Handle Multer errors
  if (err instanceof multer.MulterError) {
    logger.error('Multer error: ' + err.message);
    return res.status(400).json({ message: err.message });
  }

  // Log any other errors
  logger.error('Error: ' + err.stack || err.message);

  // Return a more specific error message if it's an expected error
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation error occurred', details: err.errors });
  }

  // For all other errors, return a generic message
  res.status(500).json({ message: 'Something went wrong, please try again later.' });
});

