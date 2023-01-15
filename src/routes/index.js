const express = require('express');
const userRoutes = require('./user.routes');
const customerRoutes = require('./customer.routes');
const categoryRoutes = require('./category.routes');
const ProductRoutes = require('./products.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/customers', customerRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', ProductRoutes);


module.exports = router;