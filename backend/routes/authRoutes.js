const express = require('express');
const { register, login } = require('../controllers/authController'); // Importing the controller methods
const router = express.Router();

// Define the routes for registration and login
router.post('/register', register);  // Register a new user
router.post('/login', login);        // Login an existing user

module.exports = router;
