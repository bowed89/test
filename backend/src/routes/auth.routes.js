const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;
