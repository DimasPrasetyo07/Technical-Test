const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')

router.get('/', salesController.getAllSalesData)
router.post('/:productCode', salesController.addNewSalesData)

module.exports = router