const express = require('express')
const port = 2000
const path = require('path')
const app = express()
const route = require('./routes/route')
const database = require('./config/database')
const session = require('express-session')
const passport = require('./middleware/passport')


app.set('view engine', 'ejs')
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(session({
    secret: 'Rnw',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: (1000 * 60 * 60) }
}))
app.use(passport.session())
app.use('/', route)

app.listen(port, err => err ? console.log(err) : console.log('Server Started...'))