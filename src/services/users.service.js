const {models} = require('../libs/sequelize')
const boom = require('@hapi/boom');

class User{


    async findAll(){
        const users = await models.User.findAll();
        return users
    }

    async findOne(id){
        const result = await models.User.findByPk(id);
        if(!result){
            throw boom.notFound('User not found');
        }
        return result;
    }

    async createUser(data){
        const newUser = await models.User.create(data)
        return newUser;
    }

    async updateUser(id,data){
        const user = await this.findOne(id);
        if(!user){
            throw boom.notFound('User not found');
        }

        const rs = await models.User.update(id,data);

        return rs;
    }

    async deleteUser(id){
        const user = await this.findOne(id);
        if(!user){
            throw boom.notFound('User not found');
        }

        await models.User.destroy(id)

        return id;
    }

}

module.exports = User;



