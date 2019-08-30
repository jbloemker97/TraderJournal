const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.get('/', (req, res) => {
    res.status(200).send({ key: 'Hello World' });
});

module.exports = router;