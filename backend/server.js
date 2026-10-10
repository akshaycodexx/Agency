const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB } = require('./config/db');

const inquiryRoutes = require('./routes/inquiries');
const careerRoutes = require('./routes/careers');
const projectRoutes = require('./routes/projects');
const testimonialRoutes = require('./routes/testimonials');
const adminRoutes = require('./routes/admin');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files securely
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    brand: 'Creativion Agency API',
    time: new Date().toISOString()
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Creativion Server] Express running on http://localhost:${PORT}`);
});
