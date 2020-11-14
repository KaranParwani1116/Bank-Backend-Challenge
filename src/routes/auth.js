const express = require('express')
const authController = require('../controllers/auth')

const router = new express.Router()

//route for signing up user
router.post('/users/signup', authController.signup)

//route for logging in user
router.post('/users/login', authController.login)

module.exports = router