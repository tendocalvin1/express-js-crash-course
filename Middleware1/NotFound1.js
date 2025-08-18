

const NotFound1 = (err, req, res, next) =>{
    const error = new Error({message: 'Not Found'})
    error.status = 404
    next(error)
}

export default NotFound1