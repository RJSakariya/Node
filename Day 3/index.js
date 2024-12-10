const express = require('express')
const port = 2000
const app = express()
let students = []

app.set('view engine','ejs')
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.render('index',{students})
    res.end()
})
app.post('/add',(req,res)=>{
    req.body.id = String(Date.now())
    students.push(req.body)
    res.redirect('/')
})
app.get('/delete',(req,res)=>{
    const deleteData = students.filter((el)=>el.id !== req.query.id)
    students = deleteData
    res.redirect('/')
})

app.listen(port,err=>{
    err ? console.log (err):console.log("Hi Server started")
})