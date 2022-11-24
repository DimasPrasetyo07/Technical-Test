const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.getAllProduct)
router.post('/', productController.addNewProduct)
router.get('/:productCode', productController.getSingleProduct)
router.put('/:productCode', productController.editProduct)
router.delete('/:id', productController.deleteProduct)


module.exports = router