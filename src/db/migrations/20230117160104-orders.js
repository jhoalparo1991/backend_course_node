"use strict";

/** @type {import('sequelize-cli').Migration} */
const { ORDER_TABLE } = require("../models/order.models");
const { CUSTOMER_TABLE } = require("../models/customer.models");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: "customer_id",
        allowNull: false,
        references: {
          model: CUSTOMER_TABLE,
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: "created_at",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
