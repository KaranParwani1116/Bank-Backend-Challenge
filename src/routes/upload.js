const express = require('express')
const uploadController = require('../controllers/upload')
const multer = require('multer')
const auth = require('../middlewares/auth')

const router = new express.Router()
const upload = multer({dest: 'bank_statement_csv/'})

router.post('/users/upload', auth, upload.single('bank_statement'), uploadController.uploadStatement)

module.exports = router