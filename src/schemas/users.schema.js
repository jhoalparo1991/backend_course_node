const Joi = require('joi');


const id = Joi.number().min(1);
const fullname = Joi.string().alphanum().min(5).max(50);
const email = Joi.string().email({tlds:{allow:['com','co']}});
const password = Joi.string().alphanum();


const createUserSchema = Joi.object({
    fullname : fullname.required(),
    email : email.required(),
    password : password.required()
})

const updateUserSchema = Joi.object({
    fullname,
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