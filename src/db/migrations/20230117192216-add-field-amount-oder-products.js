"use strict";

/** @type {import('sequelize-cli').Migration} */
const { ORDER_PRODUCT_TABLE } = require("../models/orders-products.models");
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(ORDER_PRODUCT_TABLE, "amount", {
      type: DataTypes.DECIMAL(2),
      allowNull: false,
      defaultValue: 1,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("amount");
  },
};
