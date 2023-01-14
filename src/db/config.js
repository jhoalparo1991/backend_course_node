const { Config } = require('../config/config');

const dbUser = encodeURIComponent(Config.dbUser);
const dbPassword = encodeURIComponent(Config.dbPassword);


const URL = `${Config.dialect}://${dbUser}:${dbPassword}@${Config.dbHostname}:${Config.dbPort}/${Config.dbName}`;

module.exports = {
    development: {
        url: URL,
        dialect: Config.dialect
    },
    production: {
        url: URL,
        dialect: Config.dialect
    }
}
