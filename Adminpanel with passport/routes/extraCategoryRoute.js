const express = require('express')
const route = express.Router()
const passport = require('../middleware/passport')
const extraCategoryHandler = require('../controller/extraCategoryHandler')

route.get('/addExtraCategory',passport.checkAuth,extraCategoryHandler.addExtraCat)
route.post('/addExtraCategory',extraCategoryHandler.addExtraCategory)
route.get('/viewExtraCategory',passport.checkAuth,extraCategoryHandler.viewExtraCategory)
route.get('/editExtraCategory',passport.checkAuth,extraCategoryHandler.editExtraCategory)
route.post('/updateExtraCategory',extraCategoryHandler.updateExtraCategory)
route.get('/deleteExtraCategory',extraCategoryHandler.deleteExtraCategory)

module.exports = route