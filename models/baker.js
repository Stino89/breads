const mongoose = require('mongoose');

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
    breads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bread' }]
})
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

bakerSchema.post('findOneAndDelete', async function(){
    await Bread.deleteMany({ baker: this._condition._id })
})
module.exports = mongoose.model('Baker', bakerSchema)
// Path: models/bread.js