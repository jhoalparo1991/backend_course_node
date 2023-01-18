const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

class User {


    async findAll() {
        const users = await models.User.findAll();
        return users
    }

    async findOne(id) {
        const result = await models.User.findByPk(id);
        if (!result) {
            throw boom.notFound('User not found');
        }
        return result;
    }

    async findByEmail(email){
        const user = await models.User.findOne({
            where:{
                email
            }
        })

        if(!user){
            throw boom.badRequest("Error in request");
        }

        return user;
    }

    async createUser(data) {
        const salt = 10;
        const hash = await bcrypt.hash(data.password,salt);
        const userData = {
            ...data,
            password : hash
        }
        const newUser = await models.User.create(userData)
        delete newUser.dataValues.password;
        return newUser;
    }

    async updateUser(id, data) {
        const user = await this.findOne(id);
        if (!user) {
            throw boom.notFound('User not found');
        }
        const rs = await user.update( data);

        return rs;
    }

    async deleteUser(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw boom.notFound('User not found');
        }

        await user.destroy(id)

        return id;
    }

}

module.exports = User;



