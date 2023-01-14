const { Router } = require('express');
const User = require('../services/users.service');
const validatorHandler = require('../middlewares/error.validators');
const { createUserSchema } = require('../schemas/users.schema');
const router = Router();

const service = new User();


router.get('/', async (req, res, next) => {
    try {
        const data = await service.findAll();
        return res.status(200).json({ data })
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await service.findOne(id)
        return res.status(200).json({ data })
    } catch (error) {
        next(error);
    }
})


router.post('/', validatorHandler(createUserSchema, 'body'), async (req, res, next) => {
    try {
        const data = req.body;
        const result = await service.createUser(data);
        return res.status(201).json({
            result
        });
    } catch (error) {
        next(error)
    }
});


router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await service.updateUser(id, data);
        return res.status(201).json({
            result
        });
    } catch (error) {
        next(error)
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await service.deleteUser(id);
        return res.status(200).json({
            result
        });
    } catch (error) {
        next(error)
    }
});



module.exports = router;