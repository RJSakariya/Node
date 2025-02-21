const express = require('express')
const route = express.Router()
const handler = require('../controller/handler')

route.post('/signup', handler.signup)
route.post('/login', handler.login)

module.exports = route