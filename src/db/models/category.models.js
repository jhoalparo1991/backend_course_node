const { DataTypes,Model } = require('sequelize');

const CATEGORY_TABLE = 'Categories'

const CategorySchema = {
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
    }
}


class Category extends Model{
    
    static associate(models){
        this.hasMany(models.Product,{
            as: 'product',
            foreignKey: 'categoryId',
            onDelete:'SET NULL',
            onUpdate:'CASCADE'
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName : CATEGORY_TABLE,
            timestamps:false,
            modelName:'Category'
        }
    }
}


module.exports = {
    Category,
    CATEGORY_TABLE,
    CategorySchema
}