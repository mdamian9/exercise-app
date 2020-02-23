const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
    res.status(200).json({
        message: 'GET /users route'
    });
}).post((req, res, next) => {
    res.status(201).json({
        message: 'POST /users route'
    });
});

module.exports = router;
