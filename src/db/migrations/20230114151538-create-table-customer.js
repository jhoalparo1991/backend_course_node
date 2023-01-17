"use strict";
const { CUSTOMER_TABLE } = require("../models/customer.models");
const { USER_TABLE } = require("../models/users.models");
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: "lastname",
      },
      userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: USER_TABLE,
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
