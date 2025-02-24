const jwt = require('jsonwebtoken')

module.exports.check = (req,res,next)=>{
    const data = jwt.verify(req.cookie.token,'taskmanagerissecure')
    if(data){
        req.user = data
        next()
    }else{
        res.redirect('/register')
    }
}