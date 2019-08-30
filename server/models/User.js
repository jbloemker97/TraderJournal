const { jwtSecret } = require('../config/config');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 255
    },
    isAdmin: Boolean
});

UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, jwtSecret);
}

const User = mongoose.model('User', UserSchema);

function validateUser (user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    };

    return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;