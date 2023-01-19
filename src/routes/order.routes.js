const { Router } = require("express");
const OrderService = require("../services/order.service");
const validatorHandle = require("../middlewares/error.validators");
const passport = require("passport");

const {
  createOrderSchema,
  idOrderSchema,
  addItemsOrder,
} = require("../schemas/order.schema");
const router = Router();
const orderService = new OrderService();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const data = req.body;

      data.user = req.user.data;

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
  passport.authenticate("jwt", { session: false }),
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
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { data } = req.user;
      const { id, role } = data;
      await orderService.findAll(id);
      return res.status(200).json({ id, role });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
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
