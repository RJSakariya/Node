const express = require('express')
const route = express.Router()
const handler = require('../controller/taskHandler')
const check = require('../middleware/jwtChecker')

route.get('/', check.check, handler.viewTasks)
route.get('/allTasks', check.check, handler.viewAllTasks)
route.get('/taskForm', check.check, handler.taskForm)
route.post('/add', check.check, handler.add)
route.get('/delete/:id', check.check, handler.delete)

module.exports = route