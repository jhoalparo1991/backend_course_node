const Joi = require("joi");

const customerId = Joi.number().integer();
const id = Joi.number().integer();
const productId = Joi.number().integer();
const orderId = Joi.number().integer();

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});
const addItemsOrder = Joi.object({
  productId: productId.required(),
  orderId: orderId.required(),
});
const idOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderSchema,
  idOrderSchema,
  addItemsOrder,
};
