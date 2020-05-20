const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//== Middlewares
app.use('/posts', () => {
    console.log('//== Posts middleware running...')
});

//== Routes
app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts !');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
    console.log('Connected to DB');
});

// We start listening port 3000
app.listen(3000);