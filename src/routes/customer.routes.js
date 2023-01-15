const { Router } = require('express');
const validatorHandler = require('../middlewares/error.validators');
const { customerCreate,customerUpdate } = require('../schemas/customer.schema');
const CustomerService = require('../services/customer.service');

const router = Router();
const customer = new CustomerService();


router.get('/',async(req,res,next)=>{
    try {
        const rs = await customer.findAll();
        res.status(200).json({
            rs
        })
    } catch (error) {
        next(error)
    }
})
router.get('/:id',async(req,res,next)=>{
    try {
        const { id } = req.params;

        const data = await customer.findOne(id)
        res.status(200).json({
            data
        })
    } catch (error) {
        next(error)
    }
})

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

router.patch('/:id', validatorHandler(customerUpdate, 'body'), async (req, res, next) => {
    try {
        const data = req.body
        const { id } = req.params;

        const result = await customer.update(id,data);
        res.json({
            result
        })
    } catch (error) {
        next(error)
    }
});

router.delete('/:id',  async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await customer.delete(id);
        res.json({
            result
        })
    } catch (error) {
        next(error)
    }
});



module.exports = router;