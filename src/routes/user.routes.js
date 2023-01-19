const { Router } = require("express");
const User = require("../services/users.service");
const validatorHandler = require("../middlewares/error.validators");
const { createUserSchema } = require("../schemas/users.schema");
const passport = require("passport");

const router = Router();

const service = new User();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const data = await service.findAll();
      return res.status(200).json({ data });
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
      const data = await service.findOne(id);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const result = await service.createUser(data);
      return res.status(201).json({
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
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await service.updateUser(id, data);
      return res.status(201).json({
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
      const result = await service.deleteUser(id);
      return res.status(200).json({
        result,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
