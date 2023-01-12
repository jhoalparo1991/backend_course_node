const Boom = require('@hapi/boom');

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


module.exports = {
    errorHandler,
    logErrors,
    errorHandlerBoom
}