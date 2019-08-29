const config = require('../config/mongoConfig');
const mongoose = require('mongoose');

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

const User = mongoose.model('User', UserSchema);