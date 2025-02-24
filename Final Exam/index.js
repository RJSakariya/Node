const express = require('express')

const port = 2000
const app = express()
const database = require('./config/database')

app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use('/', require('./routes/userRoute'))

app.listen(port, (err) => err ? console.log(err) : console.log("server started on port: ", port))