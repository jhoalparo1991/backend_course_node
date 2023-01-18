const boom = require("@hapi/boom");
const { Strategy } = require("passport-local");
const UserService = require("../../../services/users.service");
const service = new UserService();
const bcrypt = require("bcrypt");

const localStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);

    if (!user) {
      done(boom.unauthorized(), false);
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      done(boom.unauthorized(), false);
    }

    const data = {
      id: user.id,
      role: user.role,
    };

    done(null, data);
  } catch (error) {
    done(error, false);
  }
});

module.exports = localStrategy;
