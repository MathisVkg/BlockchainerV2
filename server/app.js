const express = require("express")
const app = express()
const sanitizeHTML = require("sanitize-html")
const jwt = require("jsonwebtoken")

const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// Routers
const dataRouter = require('./routes/Data')
app.use('/data', dataRouter)

const detailsRouter = require('./routes/Details')
app.use('/details', detailsRouter)

app.listen(process.env.PORT)