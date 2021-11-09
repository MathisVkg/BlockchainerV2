const express = require("express")
const app = express()
const sanitizeHTML = require("sanitize-html")
const jwt = require("jsonwebtoken")

const cors = require('cors')

app.use(express.json())
app.use(cors())

// Routers
const dataRouter = require('./routes/Data')
app.use('/data', dataRouter)

app.listen(process.env.PORT)