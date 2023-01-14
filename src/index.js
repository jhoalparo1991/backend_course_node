require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const { Config } = require('./config/config');
const indexRoute = require('./routes/index');
const { errorHandler, logErrors, errorHandlerBoom, errorValidator } = require('./middlewares/error.handlers')
const errorhandler = require('errorhandler');
// Initialization
const app = express();


// Settings

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1', indexRoute);

if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler)
    app.use(logErrors)
    // app.use(errorValidator)
    app.use(errorHandlerBoom)
    app.use(errorHandler)
}



// console.log(require('./libs/sequelize'));

// Run server
app.listen(Config.port, () => {
    console.log(`Server on pott ${Config.port}`);
})





