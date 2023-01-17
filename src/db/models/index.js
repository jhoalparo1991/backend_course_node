const { usersSchema, User } = require("./users.models");
const { CategorySchema, Category } = require("./category.models");
const { ProductSchema, Product } = require("./product.models");
const { OrderSchema, Order } = require("./order.models");
const { Customer, customerSchema } = require("./customer.models");
const {
  OrderProduct,
  OrderProductSchema,
} = require("./orders-products.models");

function setupModels(sequelize) {
  User.init(usersSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  //OrderProduct.associate(sequelize.models);
}

module.exports = setupModels;
