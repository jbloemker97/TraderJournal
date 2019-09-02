const { Strategy, validateNewStrategy } = require('../models/Strategy');
const { User } = require('../models/User');

async function addStrategy (req, res) {
    const { error } = validateNewStrategy(req.body);

    if (error) return res.status(404).send({ error: error.details[0].message });

    let strategy = new Strategy({
        user: req.body.user,
        title: req.body.title, 
        entryCheckList: req.body.entryCheckList, 
        exitCheckList: req.body.exitCheckList
    });

    await strategy.save();

    res.status(200).send({
        user: strategy.user,
        title: strategy.title, 
        entryCheckList: strategy.entryCheckList, 
        exitCheckList: strategy.exitCheckList
    });

}


async function getStrategies (req, res) {
    try {
        const strategy = await Strategy.find({ user: req.params.userid })
            .populate('user', '-password')
            .exec();

            res.status(200).send(strategy);
    }catch (err) {
        return res.status(400).send({ error: `Could not get strategies. ${err}` });
    }
}

module.exports = {
    getStrategies,
    addStrategy
};