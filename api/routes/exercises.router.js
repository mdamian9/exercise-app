const express = require('express');
const router = express.Router();

// Import Exercise model
const Exercise = require('../models/exercise.model');

router.route('/').get((req, res, next) => {
    Exercise.find().then(exercises => {
        res.status(200).json({
            exercises: exercises
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Error occurred',
            error: err
        });
    });
});

router.route('/add', (req, res, next) => {

});

module.exports = router;
