require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const { Config } = require('./config/config');
const indexRoute = require('./routes/index');
// Initialization
const app = express();


// Settings

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1',indexRoute);

// console.log(require('./libs/sequelize'));

// Run server
app.listen(Config.port,()=> { 
    console.log(`Server on pott ${Config.port}`);
})





