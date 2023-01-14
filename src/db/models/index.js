const { usersSchema, User } = require('./users.models')
// const { customerSchema, Customer } = require('./customer.models')


function setupModels(sequelize) {
    User.init(usersSchema, User.config(sequelize))
    // Customer.init(customerSchema, Customer.config(sequelize))
    // Customer.associate(sequelize.models)
}


module.exports = setupModels;