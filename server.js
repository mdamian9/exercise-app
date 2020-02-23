// Require Express, CORS, Mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Require dotenv to load environment variables
require('dotenv').config();

// Initialize app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Use middlewares: cors and express body-parser
app.use(cors());
app.use(express.json());

// Initialize MongoDB URI and connect to database
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).catch(err => {
    console.log(err);
});
mongoose.connection.once('open', () => {
    console.log('>>> Connected to MongoDB successfully');
});

// Initialize API routes
const usersRouter = require('./api/routes/users.router');
const exercisesRouter = require('./api/routes/exercises.router');

// Use API routes
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

// Start up server
app.listen(PORT, () => {
    console.log(`>>> Server now on port ${PORT}`);
});
