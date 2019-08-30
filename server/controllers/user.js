const { User, validate } = require('../models/User');
const bcrypt = require('bcrypt');

async function registerUser (req, res) {
    const { error } = validate(req.body);

    if (error) res.status(400).send({ error: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send({ error: 'Email already has an account' });

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

module.exports = {
    registerUser
};