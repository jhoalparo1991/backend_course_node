const {models} = require('../libs/sequelize')

class User{


    async findAll(){
        const users = await models.User.findAll();
        return users
    }

    async findOne(id){
        return 'Find one'
    }

    async createUser(data){
        return 'Create user'
    }

    async updateUser(id,data){
        return 'Update user'
    }

    async deleteUser(id){
        return 'Delete user'
    }

}

module.exports = User;



