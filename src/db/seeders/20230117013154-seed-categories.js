'use strict';
const { CATEGORY_TABLE,CategorySchema } = require('../models/category.models')
const {data} = require('./categories.seeders');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Categories',data)
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
