import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables FIRST before any other imports
dotenv.config({ path: path.join(__dirname, '.env') });

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// ─── CORS ────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  'https://play-learn-code.vercel.app',
  'https://play-learn-code-backend.onrender.com',
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (curl, Postman, mobile apps) or any localhost port
    if (!origin || allowedOrigins.includes(origin) || /^http:\/\/localhost:\d+$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
}));

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ─── ROUTES ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Health check — visit http://localhost:5000/api/health to verify server is up
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
});

// ─── 404 HANDLER ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.url}` });
});

// ─── ERROR HANDLER ───────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// ─── START SERVER ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log('\n🔧 Environment check:', {
      MONGODB_URI: !!process.env.MONGODB_URI ? '✅ set' : '❌ missing',
      JWT_SECRET: !!process.env.JWT_SECRET ? '✅ set' : '❌ missing',
      EMAIL_USER: !!process.env.EMAIL_USER ? '✅ set' : '❌ missing',
      PORT: process.env.PORT || 5000,
    });

    await connectDB();

    app.listen(PORT, () => {
      console.log(`\n✅ Server running on http://localhost:${PORT}`);
      console.log(`📡 MongoDB: ${mongoose.connection.readyState === 1 ? 'Connected ✅' : 'Disconnected ❌'}`);
      console.log(`\n📋 Available API Routes:`);
      console.log(`   POST   http://localhost:${PORT}/api/auth/register`);
      console.log(`   POST   http://localhost:${PORT}/api/auth/login`);
      console.log(`   POST   http://localhost:${PORT}/api/auth/send-otp`);
      console.log(`   POST   http://localhost:${PORT}/api/auth/verify-otp`);
      console.log(`   GET    http://localhost:${PORT}/api/auth/profile  [protected]`);
      console.log(`   POST   http://localhost:${PORT}/api/user/updatePoints  [protected]`);
      console.log(`   GET    http://localhost:${PORT}/api/health`);
      console.log('\n🟢 Ready to accept connections!\n');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();