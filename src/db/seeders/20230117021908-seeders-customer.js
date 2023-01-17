'use strict';

/** @type {import('sequelize-cli').Migration} */
const { CUSTOMER_TABLE } = require('../models/customer.models')
const { customer } = require('./customers.seeders');
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('customers',customer)
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
