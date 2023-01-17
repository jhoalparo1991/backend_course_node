'use strict';

/** @type {import('sequelize-cli').Migration} */
const { products } = require('./products.seeders');
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('products',products)
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
