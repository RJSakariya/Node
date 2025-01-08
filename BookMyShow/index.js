// import librarys
const express = require('express')
const port = 2000
const path = require('path')
const app = express()
const route = require('./router/route');
const database = require('./config/database')
// app set and use
app.set('view engine', 'ejs')
app.use(express.urlencoded())
app.use(express.static(path.join('public')))
app.use('/upload', express.static(path.join('upload')))
//routers
app.use('/', route)
app.use('/AdminPanel', route)
app.use('/addNewAd', route)
app.use('/deleteAd', route)
app.use('/addNewMovie', route)
app.use('/deleteMovie', route)
app.use('/editMovie', route)
app.use('/updateMovie', route)

//app err handler
app.listen(port, err => err ? console.log(err) : console.log('Server Started...'))