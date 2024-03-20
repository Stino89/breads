const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const breadRoutes = require('./controllers/bread')
const bakerRoutes = require('./controllers/baker')


const app = express()

// middlewaresrs
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.use('/bread', breadRoutes)
app.use('/baker', bakerRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
    

const PORT = process.env.PORT || 8080


app.listen(PORT, console.log(`Server started on port ${PORT}`))