const { ExtractJwt, Strategy } = require("passport-jwt");
const { Config } = require("../../../config/config");
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Config.secretJwt,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  done(null, payload);
});

module.exports = jwtStrategy;
