const express = require('express')
const router = express.Router()
const productRoute = require('./productRoutes')
const salesRoute = require('./salesRoutes')

router.get('/', async(req, res) => {
    res.send('INI LANDING PAGE')
})
router.use('/products', productRoute)
router.use('/sales', salesRoute)

module.exports = router

