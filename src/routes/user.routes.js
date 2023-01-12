const { Router } = require('express'); 
const User = require('../services/users.service');

const router = Router();

const service = new User();


router.get('/',async (req,res)=>{
    try {
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;