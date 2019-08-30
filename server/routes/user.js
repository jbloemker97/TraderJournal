const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

// Register new user
router.post('/register', controller.registerUser);

// Login
router.post('/login', controller.login);

module.exports = router;