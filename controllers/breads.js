const router = require('express').Router();
const Bread = require('../models/bread')
router.get('/', (req, res) => {
    res.send(Bread)
    })


    //get retrieve bread by index
    router.get('/:index', (req, res) => {
        const index = req.params.index
        res.send(Bread[index])
    })
    module.exports = router;