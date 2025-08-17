import colors from 'colors'

const logger1 = (req, res, next) =>{
    const colours = {
        GET: "green",
        POST: "blue",
        PUT: "yellow",
        DELETE: "red"
    }

    const colors = colours[req.method] || white
    console.log(`${req.method} ${req.protocol}:// ${req.get('host')} ${req.originalURL}`[colours])
    next();
} 

export default logger1;