const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();


const { registerUser, loginUser } = require('../controller/auth.controller');

// limiter yahan banao (routes se pehle)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 minute
  max: 10,                    // max 10 attempts
  message: { message: "Too many attempts, try again later" },
});

router.post('/register', registerUser);
router.post('/login',loginLimiter, loginUser);

module.exports = router;
