const userSchema = require('../model/userSchema')
const jwt = require('jsonwebtoken')

module.exports.registerPage = (req,res) => {
    res.render('register')
}
module.exports.register = async(req,res) => {
    await userSchema
}
module.exports.loginPage = (req,res) => {
    res.render('login')
}