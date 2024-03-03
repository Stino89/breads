const router = require('express').Router();
const Bread = require('../models/bread')
//get retrieve all the bread
router.get('/', (req, res) => {
    res.render('index')
    })


    //get retrieve bread by index
    router.get('/:index', (req, res) => {
        const index = req.params.index
        res.send(Bread[index])
    })
    module.exports = router;