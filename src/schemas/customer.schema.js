const Joi = require('joi');


const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const password = Joi.string().alphanum();
const userId = Joi.number().integer();
const phone = Joi.number().integer();

const customerCreate = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: Joi.object({
        email: email.required(),
        password: password.required(),
    })
})

const customerUpdate = Joi.object({
    name,
    lastName,
    phone
})


module.exports = {
    customerCreate,
    customerUpdate
}