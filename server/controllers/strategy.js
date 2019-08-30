const { Strategy } = require('../models/Strategy');

async function getStrategies (req, res) {
    res.status(200).send({ success: true });
}

module.exports = {
    getStrategies
};