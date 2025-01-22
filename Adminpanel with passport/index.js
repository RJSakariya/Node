const express = require('express')
const port = 2000
const route = require('./routes/route')
const path = require('path')
const database = require('./config/database')
const session = require('express-session')
const passport = require('./middleware/passport')

const app = express()

app.set('view engine', 'ejs')
app.use(session({
    name: 'local',
    secret: 'hi',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: (100 * 100 * 60) }
}))
app.use(passport.session())
app.use(passport.adminInfo)

app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/Edit', express.static(path.join(__dirname, 'public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.use('/', route)

app.listen(port, (err) => err ? console.log(err) : console.log('Server Started...'))