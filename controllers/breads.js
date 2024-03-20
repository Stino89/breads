const router = require('express').Router()
const Bread = require('../models/bread')
const Baker = require('../models/baker')
const baker = require('../models/baker')

// GET retreive all the bread by id 
router.get('/', async (req, res) => {
    try {
        const bread = await Bread.find()
        res.render('index', {
            bread
        })
    } catch (error) {
    const bread = await Bread.find()
    res.render('index', {
        bread
    })
}})


router.get('/:id/edit', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('edit', {
        bread
    })
})




router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    res.render('show',{
        bread: Bread[index]
    })
  
})
router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    res.render('edit', {
        bread: Bread[index],
        index
    })
})



// CREATE
router.post('/', (req, res) => {
    if (!req.body.image) req.body.image = 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/bread')
})

// PUT update bread
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if (!req.body.image) req.body.image = undefined
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.findByIdAndUpdate(id, req.body)
    res.redirect(`/bread/${id}`)
})


// DELETE bread
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Bread.findByIdAndDelete(id)
    res.redirect('/bread')
})

router.get('/data/seed', async (req, res) => {
    const seedData = [
        {
            name: 'Rye',
            hasGluten: true,
            image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
            name: 'French',
            hasGluten: true,
            image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        },
        {
            name: 'Gluten Free',
            hasGluten: false,
            image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        },
        {
            name: 'Pumpernickel',
            hasGluten: true,
            image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        }
    ]})
    
    

    seedData.forEach(bread => {
        // const random = 
        const randomId = bakerIds[Math.floor(Math.random() * bakerIds)]
        console.log(randomId)
        bread.baker = randomId
    })
   

    await Bread.insertMany(seedData)
    res.redirect('/bread')
    const Bakers = await Baker.find()
    const BakerIds = bakers.map(baker => baker._id)

    seedData.forEach(bread => {
        // const random = 
        const randomId = bakerIds[Math.floor(Math.random() * bakerIds)]
        console.log(randomId)
        bread.baker = randomId
    })
    await Bread.deleteMany()
    await Bread.insertMany(seedData)
    res.redirect('/bread')
    const bakers = await Baker.find()
    const bakerIds = bakers.map(baker => baker._id)

    seedData.forEach(bread => {
        // const random = 
        const randomId = bakerIds[Math.floor(Math.random() * bakerIds)]
        console.log(randomId)
        bread.baker = randomId
    })
    await Bread.deleteMany()
    await Bread.insertMany(seedData)
    res.redirect('/bread')
    const akers = await Baker.find()
    const akerIds = bakers.map(baker => baker._id)

    seedData.forEach(bread => {
        // const random = 
        const randomId = bakerIds[Math.floor(Math.random() * bakerIds)]
        console.log(randomId)
        bread.baker = randomId
    })
    await Bread.deleteMany()
    await Bread.insertMany(seedData)
    res.redirect('/bread')
    await Bread.deleteMany()
    await bread.insertMany(seedData)
    res.redirect('/bread')



// GET retreive bread by inde
module.exports = router


// Path: models/bread.js
// Compare this snippet from server.js:
// const express = require('express')
// const methodOverride = require('method-override')