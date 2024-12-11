const exp = require('constants')
const express = require('express')
const port = 2000
const app =express()
let students =[]
app.set('view engine','ejs')
app.use(express.urlencoded())
app.get('/',(req,res)=>{
    res.render('index',{students})
    res.end()
})
app.post('/add',(req,res)=>{
    req.body.id = Date.now().toString()
    students = [...students,req.body]
    res.redirect('/')
})
app.get('/delete',(req,res)=>{
    students.filter((el)=>{
        el.id==req.query.id
    })
    res.redirect('/')
})
app.get('/edit/:id',(req,res)=>{
    const singleData= students.find((el)=>el.id==req.params.id)
    res.render('edit',{singleData})
    res.end()
})
app.post('/update',(req,res)=>{
    students = students.map(el => el.id == req.body.id ? { ...req.body } : el);
    res.redirect('/')
})

app.listen(port,(err)=>{
    err?console.log(err):console.log(`Server started on : localhost:${port}`);
})