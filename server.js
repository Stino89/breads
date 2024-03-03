const express = require('express')
require('dotenv').config()
const breadRoutes=require('./controllers/breads')

const app = express()

// routes
app.use('/breads', breadRoutes)

const PORT = process.env.PORT || 3003

app.listen(PORT, console.log(`listening on port ${PORT}`))