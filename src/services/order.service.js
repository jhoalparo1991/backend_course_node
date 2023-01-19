const { Order } = require("../db/models/order.models");
const { OrderProduct } = require("../db/models/orders-products.models");
const CustomerService = require("./customer.service");

const boom = require("@hapi/boom");
const customerService = new CustomerService();

class OrderService {
  async findAll(customerId) {
    const customer = await customerService.findCustomerByUserId(customerId);
    console.log(customer);
    // const order = await Order.findAll({
    //   where
    // }, {
    //   include: [
    //     {
    //       association: "customer",
    //       include: ["user"],
    //     },
    //     "items",
    //   ],
    // });
    // if (!order) {
    //   throw boom.notFound("Order not found");
    // }
    // return order;
  }

  async createOrder(data) {
    const { id } = data.user;
    const customer = await customerService.findCustomerByUserId(id);
    data.customerId = customer.dataValues.id;
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
