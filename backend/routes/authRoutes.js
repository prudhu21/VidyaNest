// backend/routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Username, password, and role are required' });
  }

  try {
    const token = jwt.sign(
      { username, role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      message: 'Login successful',
      token,
      username,
      role
    });
  } catch (err) {
    console.error('❌ Login error:', err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
