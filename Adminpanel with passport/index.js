const express = require('express')
const port = 2000
const database = require('./config/database')
const route = require('./routes/route')
const categoryRoute = require('./routes/categoryRoute')
const subCategoryRoute = require('./routes/subCategoryRoute')
const extraCategoryRoute = require('./routes/extraCategoryRoute')
const productRoute = require('./routes/productRoute')

const path = require('path')
const session = require('express-session')
const passport = require('./middleware/passport')
const flash = require('connect-flash')
const flashConnect = require('./middleware/flash')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/Edit', express.static(path.join(__dirname, 'public')))
app.use('/category', express.static(path.join(__dirname, 'public')))
app.use('/subCategory', express.static(path.join(__dirname, 'public')))
app.use('/extraCategory', express.static(path.join(__dirname, 'public')))
app.use('/product', express.static(path.join(__dirname, 'public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.use(session({
    name: 'local',
    secret: 'hi',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: (100 * 100 * 60) }
}))
app.use(passport.session())
app.use(passport.adminInfo)
app.use(flash())
app.use(flashConnect.setFlash)

app.use('/', route)
app.use('/category', categoryRoute)
app.use('/subCategory', subCategoryRoute)
app.use('/extraCategory', extraCategoryRoute)
app.use('/product', productRoute)

app.listen(port, (err) => err ? console.log(err) : console.log('Server Started...'))