'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sale.belongsTo(models.Product, {foreignKey: "productCode"})
    }
  }
  Sale.init({
    invoiceDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Invoice date is required"
        },
        notEmpty: {
          msg: "Invoice date is required"
        }
      }
    },
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Invoice number is required"
        },
        notEmpty: {
          msg: "Invoice number is required"
        }
      }
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Customer name is required"
        },
        notEmpty: {
          msg: "Customer name is required"
        }
      }
    },
    productCode: {
      type: DataTypes.STRING,
      
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Amount is required"
        },
        notEmpty: {
          msg: "Amount is required"
        },
        min: {
          args: 1,
          msg: "Minimum for amount is 1"
        }
      }
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Unit Price is required"
        },
        notEmpty: {
          msg: "Unit Price is required"
        },
        min: {
          args: 1,
          msg: "Minimum for unit price is 1"
        }
      }
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    
    }
  }, {
    sequelize,
    modelName: 'Sale',
  });
  Sale.beforeCreate(el => {
    el.totalPrice = el.amount * el.unitPrice
  })

  return Sale;
};