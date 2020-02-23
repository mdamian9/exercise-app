const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
    res.status(200).json({
        message: 'Get /exercises route'
    });
}).post((req, res, next) => {
    res.status(201).json({
        message: 'POST /exercises route'
    });
});

module.exports = router;
