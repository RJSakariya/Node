const express = require('express')
const route = express.Router()
const handler = require('../controller/userHandler')

route.get('/', handler.registerPage)
route.get('/login', handler.loginPage)
route.get('/signout', handler.signOut)
route.post('/register', handler.register)
route.post('/login', handler.login)
module.exports = route