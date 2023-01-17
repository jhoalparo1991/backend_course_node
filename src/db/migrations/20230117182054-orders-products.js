"use strict";

/** @type {import('sequelize-cli').Migration} */

const { ORDER_PRODUCT_TABLE } = require("../models/orders-products.models");
const { ORDER_TABLE } = require("../models/order.models");
const { PRODUCT_TABLE } = require("../models/product.models");
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        field: "order_id",
        allowNull: false,
        references: {
          model: ORDER_TABLE,
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
        allowNull: false,
        references: {
          model: PRODUCT_TABLE,
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  },
};
