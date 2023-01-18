const { Customer } = require('../db/models/customer.models');
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt');

class CustomerService {

    async findAll(){
        const result =  await Customer.findAll({
            include:['user']
        });

        return result;
    }

    async findByEmail(email){
        const user = await Customer.findOne({
            where:{
                email
            }
        })

        if(!user){
            throw boom.badRequest("Error in request");
        }

        return user;
    }

    async createCustomer(data) {

        const { password } = data.user;
        const passwordHash = await bcrypt.hash(password,10);

        const dataResult = {
            ...data,
            user:{
                email: data.user.email,
                password:passwordHash
            }
        }

        const newCustomer = await Customer.create(dataResult,{
            include:['user']
        });

        return newCustomer;
    }

    async findOne(id){
        const customer = await Customer.findByPk(id,{
            include : ['user']
        });
        if(!customer){
            throw boom.notFound('Customer not found');            
        }
        return customer;
    }

    async update(id,data){
        const customer = await this.findOne(id);
        if(!customer){
            throw boom.notFound('Customer not found');            
        }
        const customerUpdate = await customer.update(data);
        return customerUpdate;
    }

    async delete(id){
        const customer = await this.findOne(id);
        if(!customer){
            throw boom.notFound('Customer not found');            
        }
        await customer.destroy(id,{
            include : ['user']
        })
        return id;
    }
}

module.exports = CustomerService;