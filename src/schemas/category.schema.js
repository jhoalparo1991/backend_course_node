const Joi = require('joi');


const id = Joi.number().integer();
const name = Joi.string().max(20);
const description = Joi.string().max(100);
const image = Joi.string();

const createCategory = Joi.object({
    name : name.required(),
    description,
    image
})

const updateCategory = Joi.object({
    name,
    description,
    image
})

const idCategory = Joi.object({
    id : id.required()
})

module.exports = {
    createCategory,
    updateCategory,
    idCategory
}