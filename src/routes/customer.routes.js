const { Router } = require("express");
const validatorHandler = require("../middlewares/error.validators");
const {
  customerCreate,
  customerUpdate,
} = require("../schemas/customer.schema");
const CustomerService = require("../services/customer.service");
const passport = require("passport");

const router = Router();
const customer = new CustomerService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const rs = await customer.findAll();
      res.status(200).json({
        rs,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await customer.findOne(id);
      res.status(200).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(customerCreate, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;

      const result = await customer.createCustomer(data);
      res.json({
        result,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(customerUpdate, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const { id } = req.params;

      const result = await customer.update(id, data);
      res.json({
        result,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await customer.delete(id);
      res.json({
        result,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
