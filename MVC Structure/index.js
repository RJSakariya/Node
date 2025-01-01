const express = require('express')
const port = 2000;
const database = require('./config/database')
const path = require('path');
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded())
app.use('/upload',express.static(path.join('upload')))
app.use('/',require('./routes/route'))
app.use('/addNew',require('./routes/route'))
app.use('/add',require('./routes/route'))
app.use('/delete/:id',require('./routes/route'))
app.use('/edit',require('./routes/route'))
app.use('/update',require('./routes/route'))

app.listen(port,err=>err?console.log(err):console.log('Server Started...'))