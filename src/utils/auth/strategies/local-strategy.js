const boom = require('@hapi/boom');
const { Strategy } = require('passport-local');
const UserService = require('../../../services/users.service');
const service = new UserService();

const localStrategy = new Strategy(async(email,password,done)=>{
   try {
    const user = service.findByEmail(email);

    if(!user){
        done(boom.unauthorized(),false);
    }
    console.log('Local');
   } catch (error) {
    done(error,false)
   }
});


module.exports = localStrategy;