'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = require('../data/db.json')
    let code = 1
    data.forEach(el => {
      if(el.category === "partMobil") {
        el.productCode = `PC${code++}MBL`
      } else if (el.category === "partMotor") {
        el.productCode = `PC${code++}MTR`
      }
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Products", data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {})
  }
};
