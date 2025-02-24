const express = require('express')

const port = 2000
const app = express()
const database = require('./config/database')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded())
app.use(cookieParser());
app.set('view engine', 'ejs')

app.use('/', require('./routes/userRoute'))
app.use('/tasks', require('./routes/taskRoute'))


app.listen(port, (err) => err ? console.log(err) : console.log("server started on port: ", port))