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

router.route('/add').post((req, res, next) => {
    const userName = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date
    });
    newExercise.save().then(() => {
        res.status(201).json({
            message: 'Successfully created new exercise'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Error occurred',
            error: err
        });
    });
});

router.route('/:id').get((req, res, next) => {
    Exercise.findById(req.params.id).then(exercise => {
        res.status(200).json({
            exercise: exercise
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Error occurred',
            error: err
        });
    });
}).delete((req, res, next) => {
    Exercise.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({
            message: 'Exercise successfully deleted'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Error occurred',
            error: err
        });
    });
});

module.exports = router;
