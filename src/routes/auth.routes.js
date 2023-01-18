const { Router } = require('express');
const passport = require('passport')

const router = Router();

router.post('/login',passport.authenticate('local'),async(req,res,next)=>{
    try {
        res.send('Auth')
    } catch (error) {
        next(error)
    }
})

module.exports = router;