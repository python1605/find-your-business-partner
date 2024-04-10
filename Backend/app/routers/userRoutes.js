const express = require('express');

const router = express.Router();
const userController = require('../controller/Register/user');

// const { authenticate, verifyAdmin } = require('../middleware/adminAuth');

// Login admin
router.route('/login').post(userController.login);

// add admin
router.route('/register').post(userController.register);

module.exports = router;
