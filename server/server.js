const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 5000;

let app = express();

const corsOptions = { // Add an origin when deployed
    exposedHeaders: ['x-auth-token', 'x-access-token', 'authorization']
};

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny')); // For Dev
app.use(cors(corsOptions));

// Connect to mongodb
mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => { console.log('MongoDB connected') })
    .catch(err => console.error(err));

// Routes
app.use('/user', require('./routes/user'));
app.use('/strategy', require('./routes/strategy'));

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); });