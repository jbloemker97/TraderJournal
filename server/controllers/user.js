const { User, validateRegister, validateLogin } = require('../models/User');
const bcrypt = require('bcrypt');

// Register
async function registerUser (req, res) {
    const { error } = validateRegister(req.body);

    if (error)  {
        return res.status(400).send({ error: error.details[0].message });
    } 

    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(400).send({ error: 'Email already has an account' });
    } 

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user.password = await bcrypt.hash(user.password, 10);

    await user.save();

    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send({
        _id: user._id,
        name: user.name,
        email: user.email
    });
}

// Login
async function login (req, res) {
    const { error } = validateLogin(req.body);

    if (error) return res.status(400).send({ error: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send({ error: 'Email is not reigistered' });

    if (user) {
        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) res.status(400).send({ error: 'Invalid password' });
    }

    const token = user.generateAuthToken();

    res.status(200).header('x-auth-token', token).send({
        _id: user._id,
        name: user.name,
        email: user.email
    });
}

// Get current user

async function currentUser (req, res) {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
}

module.exports = {
    registerUser,
    login,
    currentUser
};