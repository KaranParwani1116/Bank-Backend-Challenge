const express = require('express')
const authController = require('../controllers/auth')

const router = new express.Router()

router.post('/users/signup', authController.signup)

module.exports = router