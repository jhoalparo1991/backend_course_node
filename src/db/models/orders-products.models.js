const { Sequelize, DataTypes, Model } = require("sequelize");
const { ORDER_TABLE } = require("../models/order.models");
const { PRODUCT_TABLE } = require("../models/product.models");
const ORDER_PRODUCT_TABLE = "order-products";
const OrderProductSchema = {
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
  },
};

class OrderProduct extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: "OrderProducts",
      timestamps: false,
    };
  }
}

module.exports = {
  OrderProduct,
  OrderProductSchema,
  ORDER_PRODUCT_TABLE,
};
