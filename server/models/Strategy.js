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
    checklists: {
        type: [{
            name: String, // Name of checklist. Ex. Entry, Exit, Manage etc
            items: Array // Check list items under this checklist
        }]
    },
});

const Strategy = mongoose.model('Strategy', strategySchema);

function validateNewStrategy (strategy) {
    const schema = {
        user: Joi.string().required(),
        title: Joi.string().min(3).max(255).required(),
        checklists: Joi.array().items(Joi.object())
    };

    return Joi.validate(strategy, schema);
}

module.exports = {
    Strategy,
    validateNewStrategy
};