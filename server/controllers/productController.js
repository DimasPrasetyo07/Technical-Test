const { Product, sequelize } = require('../models')

class Controller{
    static async getAllProduct(req, res, next) {
        try {
            let data = await Product.findAll()
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async getSingleProduct(req, res, next) {
        let productCode = req.params.productCode
        try {
            let data = await Product.findOne({where: {
                productCode}})
            if(!data) {
                throw {name: "Product_Not_Found"}
            }
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async addNewProduct(req, res, next) {
        const t = await sequelize.transaction()
        try {
            let { productName, sellingPrice, purchasePrice, stock, category } = req.body
            let data = await Product.create({productName, sellingPrice, purchasePrice, stock, category})
            let code
            let productCategory = data.category
            if (productCategory === 'partMotor') {
                code = `PC${data.id}MTR`
            } else {
                code = `PC${data.id}MBL`
            }
            let newProduct = await Product.update({productCode : code}, {where: {id: data.id}}, { transaction: t })
            await t.commit();
            res.status(201).json({message: 'Add new product success'})
        } catch (err) {
            await t.rollback();
            next(err)
        }
    }
    static async editProduct(req, res, next) {
        let { productName, sellingPrice, purchasePrice, stock } = req.body
        let  productCode  = req.params.productCode
        try {
            let singleProduct = await Product.findOne({where: {
                productCode}})
            if (!singleProduct) {
                throw { name : "Product_Not_Found"}
            }
            let data = await Product.update({productName, sellingPrice, purchasePrice, stock}, {where: {id: singleProduct.id}, returning: true})
            if (!data) {
                throw { name : "Product_Not_Found"}
            }
            res.status(201).json(data[1])
        } catch (err) {
            next(err)
        }
    }
    static async deleteProduct(req, res, next) {
        let productId = req.params.id
        try {
            let singleProduct = await Product.findByPk(productId)
            if(!singleProduct) {
                throw { name : "Product_Not_Found"}
            }
            let deletedProduct = await Product.destroy({where: {id: productId}})
            res.status(200).json({message: "Delete product success"})
        } catch (err) {
            next(err)
        }
    }
}


module.exports = Controller