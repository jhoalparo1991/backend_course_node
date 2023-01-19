const { Router } = require("express");
const validatorHandler = require("../middlewares/error.validators");
const {
  createProduct,
  updateProduct,
  idProduct,
} = require("../schemas/product.schema");

const ProductService = require("../services/products.service");
const passport = require("passport");

const router = Router();

const product = new ProductService();

router.get("/", async (req, res, next) => {
  try {
    const data = await product.findAll();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    next(error);
  }
});
router.get(
  "/:id",
  validatorHandler(idProduct, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await product.findOne(id);
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
  passport.authenticate("jwt", { session: false }),
  validatorHandler(createProduct, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;

      const result = await product.createProduct(data);
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
  validatorHandler(idProduct, "params"),
  validatorHandler(updateProduct, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const { id } = req.params;

      const result = await product.update(id, data);
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
  validatorHandler(idProduct, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await product.delete(id);
      res.json({
        result,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
