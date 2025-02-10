const express = require('express')
const route = express.Router()
const passport = require('../middleware/passportcheck')
const producthandler = require('../controller/producthandler')

route.get('/addproduct', passport.checkAuth, producthandler.addproduct)
route.post('/addproduct', producthandler.addproductin)
route.get('/viewproduct', passport.checkAuth, producthandler.viewproduct)
route.get('/delete', producthandler.deleteproduct)
route.get('/edit', passport.checkAuth, producthandler.editproduct)
route.post('/update', producthandler.updateproduct)

module.exports = route

