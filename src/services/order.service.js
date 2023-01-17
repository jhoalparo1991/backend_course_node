const { Order } = require("../db/models/order.models");
const { OrderProduct } = require("../db/models/orders-products.models");
const boom = require("@hapi/boom");

class OrderService {
  async createOrder(data) {
    const order = await Order.create(data);
    return order;
  }

  async findOrder(orderId) {
    const order = await Order.findByPk(orderId, {
      include: [
        {
          association: "customer",
          include: ["user"],
        },
        "items",
      ],
    });
    if (!order) {
      throw boom.notFound("Order not found");
    }
    return order;
  }

  async addItemsOrder(data) {
    const order = await OrderProduct.create(data);
    return order;
  }
}

module.exports = OrderService;
