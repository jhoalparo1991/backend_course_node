const express = require('express');
const userRoutes = require('./user.routes');
const customerRoutes = require('./customer.router');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/customers', customerRoutes);


module.exports = router;