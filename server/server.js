const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 5000;

let app = express();

// Middleware
app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); });