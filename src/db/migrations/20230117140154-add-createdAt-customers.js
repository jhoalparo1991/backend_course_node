"use strict";

/** @type {import('sequelize-cli').Migration} */

const { CUSTOMER_TABLE } = require("../models/customer.models");
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(CUSTOMER_TABLE, "created_at", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, "created_at");
  },
};
