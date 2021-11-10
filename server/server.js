const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Routers
const dataRouter = require('./routes/Data')
app.use('/data', dataRouter)


// export def