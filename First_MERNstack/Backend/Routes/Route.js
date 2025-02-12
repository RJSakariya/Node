const express = require('express')
const route = express.Router()
const handler = require('../controller/handler')

route.post('/',handler.addData)
route.get('/', handler.viewData)
route.put('/', handler.updateData)
route.delete('/', handler.deleteData)

module.exports = route