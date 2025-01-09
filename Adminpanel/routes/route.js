const express = require('express')

const handler = require('../controller/handler')
const upload = require('../middleware/upload')

const route = express.Router()

route.get('/', handler.home)
route.get('/addAdmin', handler.addAdmin)
route.get('/viewAdmin', handler.viewAdmin)
route.post('/addNewAdmin',upload,handler.addNewAdmin)

module.exports = route