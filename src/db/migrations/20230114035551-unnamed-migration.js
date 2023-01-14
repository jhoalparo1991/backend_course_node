'use strict';
const { usersSchema,TABLE_NAME } = require('../models/users.models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(TABLE_NAME,'role',usersSchema.role);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TABLE_NAME,'role');
  }
};
