const { Router } = require("express");
const OrderService = require("../services/order.service");
const validatorHandle = require("../middlewares/error.validators");
const {
  createOrderSchema,
  idOrderSchema,
  addItemsOrder,
} = require("../schemas/order.schema");
const router = Router();
const orderService = new OrderService();

router.post(
  "/",
  validatorHandle(createOrderSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const order = await orderService.createOrder(data);
      return res.status(201).json({
        message: "Your order was created successfully",
        order,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/add-item",
  validatorHandle(addItemsOrder, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const order = await orderService.addItemsOrder(data);
      return res.status(201).json({
        order,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandle(idOrderSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await orderService.findOrder(id);
      return res.status(200).json({
        order,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
