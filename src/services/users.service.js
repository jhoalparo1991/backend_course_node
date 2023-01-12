class User{


    async findAll(){
        return 'Find all'
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



