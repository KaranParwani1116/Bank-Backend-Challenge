require('./db/mongoose')
const express = require('express')

//routers
const authRouter = require('./routes/auth')
const uploadRouter = require('./routes/upload')

const app = express()

app.use(express.json())
app.use(authRouter)
app.use(uploadRouter)

module.exports = app