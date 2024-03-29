const router = require('express').Router()
const Baker = require('../models/baker')
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const baker = await Baker.findById(id).populate('breads')
    res.render('bakerShow', {
        baker
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Baker.findByIdAndDelete(id)
    res.redirect('/bread')
})

router.get('/data/seed', async (req, res) => {
    const bakers = [
        {
            name: 'Monica',
            startDate: '1994-09-22',
            bio: 'Prefers napkins folded a particular way.'
        },
        {
            name: 'Ross',
            startDate: '1995-09-21',
            bio: 'Loves dinosaurs. Is currently on a break.'
        },
        {
            name: 'Joey',
            startDate: '1996-09-19',
            bio: 'Does NOT share food. Recommends that you read Little Women.'
        },
        {
            name: 'Phoebe',
            startDate: '1996-09-19',
            bio: 'Fierce protector of the bakery\'s smelly cat.'
        },
        {
            name: 'Chandler',
            startDate: '1997-09-25',
            bio: 'Thinks chewing gum is perfection. Honestly, could it BE any better?'
        },
        {
            name: 'Rachel',
            startDate: '1998-09-24',
            bio: 'Is NOT a shoe. Occasionally a fan of lobsters.'
        },
    ]
    await Baker.deleteMany()
    await Baker.insertMany(bakers)
    res.redirect('/bread')
})


module.exports = router 