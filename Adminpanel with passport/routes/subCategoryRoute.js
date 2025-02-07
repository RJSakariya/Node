const express = require('express')
const route = express.Router()
const passport = require('../middleware/passport')
const subCategoryHandler = require('../controller/subCategoryHandler')

route.get('/addSubCategory',passport.checkAuth,subCategoryHandler.addSubCat)
route.post('/addSubCategory',subCategoryHandler.addSubCategory)
route.get('/viewSubCategory',passport.checkAuth,subCategoryHandler.viewSubCategory)
route.get('/editSubCategory',passport.checkAuth,subCategoryHandler.editSubCategory)
route.post('/updateSubCategory',subCategoryHandler.updateSubCategory)
route.get('/deleteSubCategory',subCategoryHandler.deleteSubCategory)
module.exports = route