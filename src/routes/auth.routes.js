const { Router } = require("express");
const { tokens } = require("../libs/jwt");

const passport = require("passport");

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;

      const token = tokens(user);

      res.json({
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
