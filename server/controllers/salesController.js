const { Sale, Product, sequelize } = require('../models')

class Controller{
    static async getAllSalesData(req, res, next) {
        try {
            let data = await Sale.findAll()
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async addNewSalesData(req, res, next) {
        const t = await sequelize.transaction()
        let productCode = req.params.productCode
        let { invoiceDate, invoiceNumber, customerName, amount } = req.body
        try {
            let dataProduct = await Product.findOne({where: {
                productCode
            }})
            if (!dataProduct) {
                throw { name : "Product_Not_Found"}
            }
            let unitPrice = dataProduct.sellingPrice
            let dataSales = await Sale.create({
                invoiceDate,
                invoiceNumber,
                customerName,
                amount,
                unitPrice,
                productCode
            }, { transaction: t })
            let updateStock = dataProduct.stock - amount
            let newStock = await Product.update({
                stock: updateStock 
            },{
                where: {
                    productCode
                }
            }, { transaction: t })
            await t.commit();
            res.status(200).json(dataSales)
        } catch (err) {
            await t.rollback();
            next(err)
        }
    }
}

module.exports = Controller