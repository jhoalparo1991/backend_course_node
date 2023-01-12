const { Router } = require('express'); 
const User = require('../services/users.service');
const validatorHandler = require('../middlewares/error.validators');
const { createUserSchema } = require('../schemas/users.schema');
const router = Router();

const service = new User();


router.get('/',async (req,res)=>{
    try {
        const data = await service.findAll();
        return res.status(200).json({data})
    } catch (error) {
        console.log(error);
    }
})


router.post('/',validatorHandler( createUserSchema,'body'),async(req,res,next)=>{
    try {
        const data = req.body;
        const result = await service.createUser(data);
        return res.json({
            result
        });
    } catch (error) {
        next(error)
    }
});


module.exports = router;