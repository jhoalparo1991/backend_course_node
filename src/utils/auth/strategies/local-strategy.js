const boom = require('@hapi/boom');
const { Strategy } = require('passport-local');
const CustomerService = require('../../../services/customer.service');
const service = CustomerService();

const localStrategy = new Strategy(async(email,password,done)=>{
   try {
    const user = service.findByEmail(email);

    if(!user){
        done(boom.unauthorized(),false);
    }

   } catch (error) {
    done(error,false)
   }
});


module.exports = localStrategy;