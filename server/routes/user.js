const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const auth = require('../middleware/auth');

// Register new user
router.post('/register', controller.registerUser);

// Login
router.post('/login', controller.login);

// Get current user
router.get("/current", auth, controller.currentUser);

module.exports = router;