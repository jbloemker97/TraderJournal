const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/strategy');

router.get('/:userid', auth, controller.getStrategies);

router.post('/', auth, controller.addStrategy);

module.exports = router;