const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user');
const propertyRouter = require('./routes/property');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

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
    cb(new Error('Only images are allowed!'));
  },
  limits: {
    fileSize: 1 * 1024 * 1024 // 1 MB limit
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
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

// Database connection
mongoose.connect('mongodb://localhost:27017/hama_bwana', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Could not connect to MongoDB', err);
  process.exit(1);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});
