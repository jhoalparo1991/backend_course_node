const Joi = require('joi');


const id = Joi.number().min(1);
const email = Joi.string().email({ tlds: { allow: ['com', 'co', 'net'] } });
const password = Joi.string().alphanum();


const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

const updateUserSchema = Joi.object({
    email,
    password
})

const getOneUserSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getOneUserSchema
}