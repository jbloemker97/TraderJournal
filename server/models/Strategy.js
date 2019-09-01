const mongoose = require('mongoose');
const Joi = require('joi');

const strategySchema = mongoose.Schema({
    title: {
        type: String,
        minLength: 3,
        maxLength: 255,
        required: true
    },
    entryChecklist: {
        type: [{
            type: String,
            maxLength: 255
        }]
    },
    exitCheckList: {
        type: [{
            type: String,
            maxLength: 255
        }]
    }
});

const Strategy = mongoose.model('Strategy', strategySchema);

function validateNewStrategy (strategy) {
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        entryCheckList: Joi.array().items(Joi.string()),
        exitCheckList: Joi.array().items(Joi.string())
    };

    return Joi.validate(strategy, schema);
}

module.exports = {
    Strategy,
    validateNewStrategy
};