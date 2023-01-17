"use strict";
const { CATEGORY_TABLE } = require("../models/category.models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: "Tecnologias",
      },
      {
        name: "Ropa",
      },
      {
        name: "Calzados",
      },
      {
        name: "Juguetes",
      },
      {
        name: "Hogar",
      },
      {
        name: "Others",
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete(CATEGORY_TABLE, null, {});
  },
};
