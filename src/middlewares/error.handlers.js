const Boom = require('@hapi/boom');
const { ValidationError } = require('sequelize');

function logErrors(err,req,res,next){
    console.log('Log errors');
    next(err)
}

function errorHandler(err,req,res,next){
    console.log('Handle errors');

    res.status(500).json({
        message : err.message,
        stack : err.stack
    })


}

function errorHandlerBoom(err,req,res,next){
    console.log('Handle errors Boom');

    if(err.isBoom){
        const { output } = err
        res.status(output.statusCode).json({
            message : output.payload
        })
    }

    next(err)


}

function errorValidator(err,req,res,next){
    if(err instanceof ValidationError){
        return res.status(400).json({
            message : err.message,
            error : err.errors
        })
    }
    next()
}

module.exports = {
    errorHandler,
    logErrors,
    errorHandlerBoom,
    errorValidator
}