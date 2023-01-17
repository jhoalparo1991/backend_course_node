"use strict";

/** @type {import('sequelize-cli').Migration} */
const { PRODUCT_TABLE } = require("../models/product.models");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: "Celular Xaomi Pro",
        price: 999.56,
        category_id: 1,
      },
      {
        name: "Apple Watch Pro",
        price: 1250,
        category_id: 1,
      },
      {
        name: "Mack Book Air 2",
        price: 2100,
        category_id: 1,
      },
      {
        name: "Lenovo Ideacenter IV",
        price: 1400,
        category_id: 1,
      },
      {
        name: "Vestido rosa",
        price: 60,
        category_id: 2,
      },
      {
        name: "Pantalon verano",
        price: 40,
        category_id: 2,
      },
      {
        name: "Camiseta dama",
        price: 10,
        category_id: 2,
      },
      {
        name: "Zapatos VO5",
        price: 160,
        category_id: 3,
      },
      {
        name: "Zapatos Damas",
        price: 210,
        category_id: 3,
      },
      {
        name: "Pantuflas",
        price: 45,
        category_id: 3,
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  },
};
