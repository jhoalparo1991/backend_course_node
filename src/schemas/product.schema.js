const Joi = require('joi');


const id = Joi.number().integer();
const name = Joi.string().max(20);
const description = Joi.string().max(100);
const image = Joi.string();
const price = Joi.number().precision(2);
const status = Joi.boolean();
const categoryId = Joi.number().integer();

const createProduct = Joi.object({
    name : name.required(),
    description,
    image,
    price,
    status,
    categoryId : categoryId.required()
})

const updateProduct = Joi.object({
    name,
    description,
    image,
    price,
    status,
    categoryId,
})

const idProduct = Joi.object({
    id : id.required()
})

module.exports = {
    createProduct,
    updateProduct,
    idProduct
}