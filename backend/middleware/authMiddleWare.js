const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const header = req.header('Authorization');
  if (!header) return res.status(401).json({ error: 'No token provided' });

  const token = header.replace('Bearer ', '').trim();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticate;
