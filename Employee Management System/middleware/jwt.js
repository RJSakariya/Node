const jwt = require('jsonwebtoken');

const authentication = (req , res , next) => {
    let token = req.header("Authorization");
    if(!token){
        return res.status(200).json({message : "Token Not Found"});
    }

    let newToken = token.slice(7 , token.length);
    let decode =  jwt.verify(newToken,"employeemanagementissecure")
    req.user = decode;
    next();
}

module.exports = authentication;