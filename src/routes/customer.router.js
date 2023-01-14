const { Router } = require('express');
const validatorHandler = require('../middlewares/error.validators');
const { customerCreate } = require('../schemas/customer.schema');
const CustomerService = require('../services/customer.service');

const router = Router();
const customer = new CustomerService();

router.post('/', validatorHandler(customerCreate, 'body'), async (req, res, next) => {
    try {
        const data = req.body
        const result = await customer.createCustomer(data);
        res.json({
            result
        })
    } catch (error) {
        next(error)
    }
});



module.exports = router;