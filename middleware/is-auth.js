const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('authorization');
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader;
    if(!token || token === ''){
        req.isAuth = false;
        return next(); 
    }
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, 'createawesomeresume');
    }catch(err){
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
    
}