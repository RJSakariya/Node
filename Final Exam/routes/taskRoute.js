const express = require('express')
const route = express.Router()
const handler = require('../controller/taskHandler')
const check = require('../middleware/jwtChecker')
route.get('/', check.check(), handler.viewTask)

module.exports = route