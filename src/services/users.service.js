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
        console.log(data);
        const newUser = await models.User.create(data)
        return newUser;
    }

    async updateUser(id,data){
        return 'Update user'
    }

    async deleteUser(id){
        return 'Delete user'
    }

}

module.exports = User;



