require('dotenv').config()
const express = require('express');
const { Config } = require('./config/config');
// Initialization
const app = express();


// Settings



// Run server
app.listen(Config.port,()=> { 
    console.log(`Server on pott ${Config.port}`);
})





