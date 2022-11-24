function errorHandler(err, req, res, next) {
    let code
    let message
    console.log(err)
    if (err.name == "SequelizeValidationError") {
        code = 400
        message = err.errors[0].message
    } else if(err.name == "Product_Not_Found") {
        code = 404
        message = "Product Not Found"
    } 
    else {
        code = 500
        message = "Internal Server Error"
    }
    console.log(code, message)
    res.status(code).json({message})
}

module.exports = errorHandler