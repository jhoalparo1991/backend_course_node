const { Router } = require("express");
const validatorHandler = require("../middlewares/error.validators");
const {
  createCategory,
  updateCategory,
  idCategory,
} = require("../schemas/category.schema");
const passport = require("passport");

const CategoryService = require("../services/category.service");

const router = Router();

const category = new CategoryService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const data = await category.findAll();
      return res.status(200).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(idCategory, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await category.findOne(id);
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
  validatorHandler(createCategory, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;

      const result = await category.createCategory(data);
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
  validatorHandler(idCategory, "params"),
  validatorHandler(updateCategory, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const { id } = req.params;

      const result = await category.update(id, data);
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
  validatorHandler(idCategory, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await category.delete(id);
      res.json({
        result,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
