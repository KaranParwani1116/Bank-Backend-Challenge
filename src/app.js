require('./db/mongoose')
const express = require('express')
const bodyParser = require('body-parser')

//routers
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(authRouter)

module.exports = app