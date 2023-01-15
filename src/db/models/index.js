const { usersSchema, User } = require('./users.models')
const { CategorySchema,Category } = require('./category.models')
const { ProductSchema,Product } = require('./product.models')
// const { customerSchema, Customer } = require('./customer.models')


function setupModels(sequelize) {
    User.init(usersSchema, User.config(sequelize))
    Category.init(CategorySchema,Category.config(sequelize))
        .associate(sequelize.models);
    Product.init(ProductSchema,Product.config(sequelize))
        .associate(sequelize.models);
    // Customer.init(customerSchema, Customer.config(sequelize))
    // Customer.associate(sequelize.models)
}


module.exports = setupModels;