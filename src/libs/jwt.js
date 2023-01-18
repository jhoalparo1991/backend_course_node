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

module.exports = {
  tokens,
};
