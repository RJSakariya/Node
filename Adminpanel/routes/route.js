const express = require('express')

const handler = require('../controller/handler')
const upload = require('../middleware/upload')

const route = express.Router()

route.get('/', handler.loginForm)
route.post('/login', handler.login)
route.get('/logout', handler.logout)
route.get('/dashboard', handler.home)
route.get('/addAdmin', handler.addAdmin)
route.get('/viewAdmin', handler.viewAdmin)
route.post('/addNewAdmin', upload, handler.addNewAdmin)
route.get('/Delete/:id', handler.Delete)
route.get('/Edit/:id', handler.Edit)
route.post('/Update', upload, handler.Update)

module.exports = route