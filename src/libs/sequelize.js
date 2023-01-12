const { Sequelize } = require('sequelize');
const { Config } = require('../config/config');
const setupModels = require('../db/models/');

const dbUser = encodeURIComponent(Config.dbUser);  
const dbPassword = encodeURIComponent(Config.dbPassword);  

const URL = `postgres://${dbUser}:${dbPassword}@${Config.dbHostname}:${Config.dbPort}/${Config.dbName}`;

const sequelize = new Sequelize(URL,{
    dialect:'postgres',
    logging: console.log
})

sequelize.authenticate()
    .then(data => console.log(data))
    .catch(error => console.error(error));

setupModels(sequelize);

sequelize.sync();


module.exports = sequelize;