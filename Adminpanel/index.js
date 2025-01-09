const express = require('express')
const port = 2000
const route = require('./routes/route')
const path = require('path')
const database = require('./config/database')
const cookie = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(cookie())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/Edit', express.static(path.join(__dirname, 'public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.use('/', route)

app.listen(port, (err) => err ? console.log(err) : console.log('Server Started...'))