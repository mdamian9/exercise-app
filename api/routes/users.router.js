// Require express, set up express router
const express = require('express');
const router = express.Router();

// Import User model
const User = require('../models/user.model');

router.route('/').get((req, res, next) => {

    User.find().then(users => {
        res.status(200).json({
            users: users
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
    const newUser = new User(userName);

    newUser.save.then(() => {
        res.status(201).json({
            message: 'Successfully created new user'
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
