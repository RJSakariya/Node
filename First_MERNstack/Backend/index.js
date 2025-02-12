const express = require('express')
const app = express()
const db = require('./config/db')
app.use(require('./Routes/Route'))

db.once('open', err => err ? console.log(err) : app.listen(2000, err => err ? console.log(err) : console.log('Database Started And Server Started...')))