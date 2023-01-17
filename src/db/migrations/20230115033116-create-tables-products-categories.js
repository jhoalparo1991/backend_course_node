"use strict";
const { CATEGORY_TABLE } = require("../models/category.models");
const { PRODUCT_TABLE } = require("../models/product.models");
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
    });
    await queryInterface.createTable(PRODUCT_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: "category_id",
        allowNull: false,
        references: {
          model: CATEGORY_TABLE,
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  },
};
