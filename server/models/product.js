'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Sale, {foreignKey: "productCode"})
    }
  }
  Product.init({
    productCode: DataTypes.STRING,
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notNull: {
          msg: "Product name is required"
         },
         notEmpty: {
          msg: "Product name is required"
         }
      }
    },
    sellingPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Selling price is required"
        },
        notEmpty: {
          msg: "Selling price is required"
        },
        min: {
          args: 1,
          msg: 'Minimum selling price is 1'
        }
      }
    },
    purchasePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Purchase price is required"
        },
        notEmpty: {
          msg: "Purchase price is required"
        },
        min: {
          args: 1,
          msg: 'Minimum purchase price is 1'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Stock is required"
        },
        notEmpty: {
          msg: "Stock is required"
        },
        min: {
          args: 1,
          msg: 'Minimum stock is 1'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Category is required"
        },
        notEmpty: {
          msg: "Category is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};