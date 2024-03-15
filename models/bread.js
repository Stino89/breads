const { default: mongoose } = require("mongoose")

const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, default: 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'},
    hasGluten: {type: Boolean, default: true}
})

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
// Path: controllers/breads.js
const express = require('express')
const router = express.Router()
const Bread = require('../models/bread')
