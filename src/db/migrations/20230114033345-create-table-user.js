'use strict';
const { usersSchema, USER_TABLE } = require('../models/users.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, usersSchema)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
  }
};
