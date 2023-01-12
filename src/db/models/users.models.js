const { Model,DataTypes,Sequelize } = require('sequelize');

const TABLE_NAME = 'users';

const usersSchema = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement:true
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull:false,
            field: 'fullname',
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        createdAt:{
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW()
        }
}


class User extends Model {

    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName : TABLE_NAME,
            modelName: 'User',
            timestamps: false
        }
    }
}



module.exports = {
    User,
    TABLE_NAME,
    usersSchema
}