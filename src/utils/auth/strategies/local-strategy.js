const { Strategy } = require("passport-local");

const AuthService = require("../../../services/auth.service");

const service = new AuthService();

const localStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await service.getUser(email, password);
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
