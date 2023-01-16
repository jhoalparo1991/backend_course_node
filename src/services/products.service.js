const { Product } = require('../db/models/product.models');
const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize');

class ProductService {

    async findAll(){
        const result =  await models.Product.findAll({
            include:['Category']
        });

        return result;
    }

    async createProduct(data) {

        const newProduct = await Product.create(data);

        return newProduct;
    }

    async findOne(id){
        const product = await Product.findByPk(id);
        if(!product){
            throw boom.notFound('Product not found');            
        }
        return product;
    }

    async update(id,data){
        const product = await this.findOne(id);
        if(!product){
            throw boom.notFound('Product not found');            
        }
        const ProductUpdate = await product.update(data);
        return ProductUpdate;
    }

    async delete(id){
        const product = await this.findOne(id);
        if(!product){
            throw boom.notFound('Product not found');            
        }
        await product.destroy(id)
        return id;
    }
}

module.exports = ProductService;