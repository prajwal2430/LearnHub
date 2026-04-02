import express from 'express';
import { updateUserPoints, getUserById, getLeaderboard } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'User routes are working ✅' });
});

// Ping test
router.get('/ping', (req, res) => {
  console.log("UserRouter - Ping hit");
  res.json({ message: 'pong' });
});

// Leaderboard — no auth needed for public ranking
router.get('/leaderboard', (req, res, next) => {
  console.log("UserRouter - /leaderboard middleware hit");
  next();
}, getLeaderboard);

// Get user by ID — protected
router.get('/:id', protect, getUserById);

// Update user points — protected (was missing protect before — fixed)
router.post('/updatePoints', protect, updateUserPoints);

export default router;