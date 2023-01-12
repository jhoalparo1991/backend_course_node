const { usersSchema,User } = require('./users.models')


function setupModels(sequelize){
    User.init(usersSchema,User.config(sequelize))
}


module.exports = setupModels;