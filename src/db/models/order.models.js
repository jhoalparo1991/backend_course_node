const { DataTypes, Model, Sequelize } = require("sequelize");
// const { CUSTOMER_TABLE } = require("./customer.models");

const ORDER_TABLE = "orders";

const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    field: "customer_id",
    allowNull: false,
    references: {
      model: "customers",
      key: "id",
    },
  },
  // total: {
  //   type: DataTypes.VIRTUAL,
  //   get: function () {
  //     if (this.items.length > 0) {
  //       return this.items.reduce((total, item) => {
  //         return total + item.price * item.OrderProducts.amount;
  //       }, 0);
  //     }
  //     return 0;
  //   },
  // },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at",
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, { as: "customer" });

    this.belongsToMany(models.Product, {
      as: "items",
      through: models.OrderProducts,
      foreignKey: "orderId",
      otherKey: "productId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false,
    };
  }
}

module.exports = {
  Order,
  OrderSchema,
  ORDER_TABLE,
};
