const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

function setRoutes(app) {
    router.post('/register', authController.registerUser);
    router.post('/login', authController.loginUser);

    app.use('/auth', router);
}

module.exports = setRoutes;