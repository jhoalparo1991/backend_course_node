'use strict';
const { usersSchema,TABLE_NAME } = require('../models/users.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
      await queryInterface.createTable(TABLE_NAME,usersSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME)
  }
};
