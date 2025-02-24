const express = require('express')
const route = express.Router()
const handler = require('../controller/userHandler')

route.get('/', handler.registerPage)
route.get('/login', handler.loginPage)

module.exports = route