require("dotenv").config();

const Config = {
  port: process.env.PORT || 3000,
  enviroment: process.env.NODE_ENV || "development",

  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbHostname: process.env.DB_HOSTNAME,

  dialect: process.env.DB_DIALECT,
  dbUrl: process.env.DATABASE_URL,
  secretJwt: process.env.SECRET_JWT,
};

module.exports = {
  Config,
};
