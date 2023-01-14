const { Model, DataTypes } = require('sequelize')
const { USER_TABLE } = require('./users.models');
const sequelize = require('../../libs/sequelize')

const CUSTOMER_TABLE = 'customers';

const customerSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: 'lastname'
    },
    userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
};

class Customer extends Model {

    static associate(models) {

        console.log('Models -> ', models.User);

        this.belongsTo(models.User, {
            as: 'users'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false
        }
    }

}

Customer.init(customerSchema, Customer.config(sequelize)).associate(sequelize.models);

module.exports = {
    customerSchema,
    CUSTOMER_TABLE,
    Customer
}