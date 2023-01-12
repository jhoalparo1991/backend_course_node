const Joi = require('joi');


const id = Joi.number().min(1);
const fullName = Joi.string().min(5).max(50);
const email = Joi.string().email({tlds:{allow:['com','co','net']}});
const password = Joi.string().alphanum();


const createUserSchema = Joi.object({
    fullName : fullName.required(),
    email : email.required(),
    password : password.required()
})

const updateUserSchema = Joi.object({
    fullName,
    email,
    password
})

const getOneUserSchema = Joi.object({
    id : id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getOneUserSchema
}