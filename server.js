const express = require('express')
require('dotenv').config()
const breadRoutes=require('./controllers/breads')

const app = express()

// middlewares
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.use('/breads', breadRoutes)

const PORT = process.env.PORT || 3003

app.listen(PORT, console.log(`listening on port ${PORT}`))