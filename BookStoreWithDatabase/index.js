const express = require('express')
const port = 2000
const database = require('./config/database')
const schema = require('./model/data')
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded())
app.get('/', async (req, res) => {
    await schema.find({}).then((Books)=>{
    res.render('index', { Books })
    res.end()
})
})
app.get('/AddBook', (req, res) => {
    res.render('AddBook')
    res.end()
})
app.post('/Add',async (req, res) => {
    await schema.create(req.body).then(()=>res.redirect('/'))
})
app.get('/EditBook/:id',async (req, res) => {
    await schema.findById(req.params.id).then((singleBook)=>{
        res.render('EditBook', { singleBook })
        res.end()
    })
})
app.post('/Update',async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>res.redirect('/'))
})

app.get('/Delete',async (req, res) => {
    await schema.findByIdAndDelete(req.query.id).then(()=>res.redirect('/'))
})
app.listen(port,err=>err?console.log(err):console.log("Server started..."))