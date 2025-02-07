const express = require('express')
const route = express.Router()
const categoryHandler = require('../controller/categoryHandler')
const upload = require('../middleware/uploadcatimg')
const passport = require('../middleware/passport')

route.get('/addCategory', passport.checkAuth, categoryHandler.addCat)
route.post('/addCategory', upload, categoryHandler.addCategory)
route.get('/viewCategory', passport.checkAuth, categoryHandler.viewCategory)
route.get('/editCategory', passport.checkAuth, categoryHandler.editCategory)
route.post('/updateCategory', upload, categoryHandler.updateCategory)
route.get('/deleteCategory', categoryHandler.deleteCategory)


module.exports = route