const mongoose = require('mongoose')
const Bread = require('./bread')

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio:String,
},{
    toJSON: {
        virtuals: true}
    })

bakerSchema.post('findOneAndDelete', async function(){
    await Bread.deleteMany({ baker: this._condition._id })
})
module.exports = mongoose.model('Baker', bakerSchema)
// Path: models/bread.js