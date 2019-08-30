const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

// Register new user
router.post('/', controller.registerUser);

module.exports = router;