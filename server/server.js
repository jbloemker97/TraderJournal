const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const morgan = require('morgan');

const PORT = 5000;

let app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny')); // For Dev

// Connect to mongodb
mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => { console.log('MongoDB connected') })
    .catch(err => console.error(err));

// Routes
app.use('/user', require('./routes/user'));
app.use('/strategy', require('./routes/strategy'));

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); });