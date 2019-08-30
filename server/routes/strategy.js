const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/strategy');

router.get('/', auth, controller.getStrategies);

module.exports = router;