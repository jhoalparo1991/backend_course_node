"use strict";
const { CATEGORY_TABLE } = require("../models/category.models");
const { PRODUCT_TABLE } = require("../models/product.models");
const { USER_TABLE } = require('../models/users.models')
const { CUSTOMER_TABLE } = require("../models/customer.models");
const { ORDER_TABLE } = require("../models/order.models");
const { ORDER_PRODUCT_TABLE } = require("../models/orders-products.models");

const { DataTypes, Sequelize } = require("sequelize");
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
    await queryInterface.createTable(USER_TABLE, 
      {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
          field: "role",
          type: DataTypes.ENUM("admin", "user","customer"),
          allowNull: false,
          defaultValue: "user",
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            field:'created_at'
        }
        }
    )
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
      createdAt: {
        field:'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    });
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
      amount: {
        type: DataTypes.DECIMAL(2),
        allowNull: false,
        defaultValue: 1,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);

  },
};
