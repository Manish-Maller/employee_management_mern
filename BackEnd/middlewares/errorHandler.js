const {VALIDATION_ERROR, FILE_NOT_FOUND, SERVER_ERROR, AUTHENTICATION_ERROR} = require("../constants");

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode :500

    switch (statusCode) {
        case VALIDATION_ERROR:
            res.status(400).json({ErrorType: 'Validation Error',message:err.message, stackTrace:err.stack})
            
            break;
        case FILE_NOT_FOUND:
            res.status(404).json({ErrorType: 'File Not Found Error',message:err.message, stackTrace:err.stack})

            break;
        case SERVER_ERROR:
            res.status(500).json({ErrorType: 'Server Error',message:err.message, stackTrace:err.stack})
            break;
        case AUTHENTICATION_ERROR:
            res.status(403).json({ErrorType: 'Authentication Failed',message:err.message, stackTrace:err.stack})
            break;
        default:
            break;
    }
}

module.exports = errorHandler