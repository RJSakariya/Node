const express = require('express')

const handler = require('../controller/handler')
const upload = require('../middleware/upload')

const route = express.Router()
const passport = require('../middleware/passport')

route.get('/', handler.loginForm)
route.post('/login', passport.authenticate('local', { failureRedirect: '/' }), handler.login)
route.get('/logout', handler.logout)
route.get('/dashboard', passport.checkAuth, handler.home)
route.get('/profile', passport.checkAuth, handler.profile)
route.get('/addAdmin', passport.checkAuth, handler.addAdmin)
route.get('/viewAdmin', passport.checkAuth, handler.viewAdmin)
route.post('/addNewAdmin', upload, handler.addNewAdmin)
route.get('/Delete/:id', handler.Delete)
route.get('/Edit/:id', handler.Edit)
route.post('/Update', upload, handler.Update)

module.exports = route