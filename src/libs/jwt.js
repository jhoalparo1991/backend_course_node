const jwt = require("jsonwebtoken");
const { Config } = require("../config/config");

const tokens = (data) => {
  const token = jwt.sign(
    {
      data,
    },
    Config.secretJwt
  );

  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, Config.secretJwt);
};

module.exports = {
  tokens,
  verifyToken,
};
