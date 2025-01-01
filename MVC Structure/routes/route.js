const express = require('express')
const route = express.Router()
const controller = require('../controller/handler')
const upload = require('../middleware/multer')
route.get('/',controller.root)
route.get('/addNew',controller.addNew)
route.post('/add',upload,controller.add)
route.get('/delete/:id',controller.delete)
route.get('/edit',controller.edit)
route.post('/update',upload,controller.update)

module.exports = route