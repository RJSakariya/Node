const express = require('express')
const port = 2000
const app = express()
const db = require('./config/db')
app.listen(port,(err)=>err?console.log(err):console.log('Server stated...'))