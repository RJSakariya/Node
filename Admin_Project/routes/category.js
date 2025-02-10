const express = require('express')
const route = express.Router()
const passport = require('../middleware/passportcheck')
const categoryhandler = require('../controller/categoryhandler')
const upload = require('../middleware/uploadcatimg')

route.get('/addcat', passport.checkAuth,categoryhandler.addcat)
route.post('/addcategory', upload, categoryhandler.addcategory)
route.get('/viewcategory',passport.checkAuth,categoryhandler.viewcategory)

module.exports = route
