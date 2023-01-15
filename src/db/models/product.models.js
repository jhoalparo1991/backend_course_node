const { DataTypes,Model } = require('sequelize');
const { CATEGORY_TABLE } =require('./category.models')
const PRODUCT_TABLE = 'Products'

const ProductSchema = {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    name: {
        type : DataTypes.STRING(20),
        unique:true,
        allowNull : false
    },
    description: {
        type : DataTypes.STRING(100),
        allowNull : true
    },
    image: {
        type: DataTypes.STRING(),
        allowNull:true
    },
    price:{
        type : DataTypes.DECIMAL(10,2),
        defaultValue : 0,
        allowNull : true
    },
    status:{
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : true
    },
    categoryId : {
        type : DataTypes.INTEGER,
        field:'category_id',
        allowNull:true,
        references:{
            model : CATEGORY_TABLE,
            key : 'id'
        }
    }
}


class Product extends Model{

    static associate(models){
        this.belongsTo(models.Category,{as:'Category'})
    }

    static config(sequelize){
        return {
            sequelize,
            tableName : PRODUCT_TABLE,
            timestamps:false,
            modelName:'Product'
        }
    }
}


module.exports = {
    Product,
    ProductSchema,
    PRODUCT_TABLE,
}