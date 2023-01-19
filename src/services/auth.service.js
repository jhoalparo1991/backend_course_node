const { User } = require("../db/models/users.models");
const boom = require("@hapi/boom");
const { passwordCompare } = require("../libs/bcrypt");

class AuthService {
  async getUser(email, password) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw boom.notFound("Email or password invalid");
    }

    if (!passwordCompare(password, user.password)) {
      throw boom.badRequest("Email or password invalid");
    }

    return user;
  }
}

module.exports = AuthService;
