const { Sequelize } = require('sequelize');
const { Config } = require('../config/config');
const setupModels = require('../db/models/');

const dbUser = encodeURIComponent(Config.dbUser);  
const dbPassword = encodeURIComponent(Config.dbPassword);  


const URL = `${Config.dialect}://${dbUser}:${dbPassword}@${Config.dbHostname}:${Config.dbPort}/${Config.dbName}`;

const sequelize = new Sequelize(URL,{
    dialect:Config.dialect,
    logging: console.log
})

sequelize.authenticate()
    .then(data => console.log(data))
    .catch(error => console.error(error));

setupModels(sequelize);

module.exports = sequelize;