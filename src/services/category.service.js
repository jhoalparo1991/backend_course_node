const { Category } = require('../db/models/category.models');
const boom = require('@hapi/boom')

class CategoryService {

    async findAll(){
        const result =  await Category.findAll();

        return result;
    }

    async createCategory(data) {

        const newCategory = await Category.create(data);

        return newCategory;
    }

    async findOne(id){
        const category = await Category.findByPk(id);
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