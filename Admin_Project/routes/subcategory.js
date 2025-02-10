const express = require('express')
const route = express.Router()
const passport = require('../middleware/passportcheck')
const subcategoryhandler = require('../controller/subcategoryhandler')

route.get('/addsubcat',passport.checkAuth,subcategoryhandler.addsubcat)
route.post('/addsubcategory',subcategoryhandler.addsubcategory)
route.get('/viewsubcategory',passport.checkAuth,subcategoryhandler.viewsubcategory)
module.exports = route