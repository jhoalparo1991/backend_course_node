const bcrypt = require("bcrypt");

const passwordGenerate = (password) => {
  const salt = bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const passwordCompare = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};

module.exports = {
  passwordGenerate,
  passwordCompare,
};
