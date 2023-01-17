"use strict";

/** @type {import('sequelize-cli').Migration} */
const { USER_TABLE } = require("../models/users.models");
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, "role", {
      field: "role",
      type: DataTypes.ENUM("admin", "user", "client", "customer"),
      allowNull: false,
      defaultValue: "user",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("role");
  },
};
