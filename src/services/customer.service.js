const { Customer } = require('../db/models/customer.models');

class CustomerService {

    async createCustomer(data) {
        const newCustomer = await Customer.create(data, {
            include: ['users']
        });

        return newCustomer;
    }

}

module.exports = CustomerService;