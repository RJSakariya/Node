const express = require('express')
const route = express.Router()
const passport = require('../middleware/passport')
const productHandler = require('../controller/productHandler')

route.get('/addProduct',passport.checkAuth,productHandler.addProd)
route.post('/addProduct',productHandler.addProduct)
route.get('/viewProduct',passport.checkAuth,productHandler.viewProduct)
route.get('/editProduct',passport.checkAuth,productHandler.editProduct)
route.post('/updateProduct',productHandler.updateProduct)
route.get('/deleteProduct',productHandler.deleteProduct)

module.exports = route