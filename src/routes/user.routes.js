const { Router } = require('express'); 
const User = require('../services/users.service');

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


module.exports = router;