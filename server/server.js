const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const PORT = 5000;

let app = express();

// Connect to mongodb
mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => { console.log('MongoDB connected') })
    .catch(err => console.error(err));

// Routes
app.use('/user', require('./routes/user'));

// Middleware
app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); });