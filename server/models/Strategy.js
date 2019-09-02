const mongoose = require('mongoose');
const Joi = require('joi');
const User = require('./User');

const strategySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        minLength: 3,
        maxLength: 255,
        required: true
    },
    entryCheckList: {
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
        user: Joi.string().required(),
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