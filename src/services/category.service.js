const { Category } = require('../db/models/category.models');
const boom = require('@hapi/boom')

class CategoryService {

    async findAll(){
        const result =  await Category.findAll({
            include:['product']
        });

        return result;
    }

    async createCategory(data) {

        const newCategory = await Category.create(data,{
            include:['Product']
        });

        return newCategory;
    }

    async findOne(id){
        const category = await Category.findByPk(id,{
            include : ['Product']
        });
        if(!category){
            throw boom.notFound('Category not found');            
        }
        return category;
    }

    async update(id,data){
        const category = await this.findOne(id);
        if(!category){
            throw boom.notFound('Category not found');            
        }
        const CategoryUpdate = await category.update(data);
        return CategoryUpdate;
    }

    async delete(id){
        const category = await this.findOne(id);
        if(!category){
            throw boom.notFound('Category not found');            
        }
        await category.destroy(id)
        return id;
    }
}

module.exports = CategoryService;