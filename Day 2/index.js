const express = require('express')
const port = 2000

const app = express()
const student = [
    {
        'id':"1",
        'name': 'Dip',
        'course':'UI/UX'
    },
    {
        'id':"2",
        'name': 'Tako',
        'course':'FullStack'
    },
    {
        'id':"1",
        'name': 'Amit',
        'course':'FrontEnd'
    },

]
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render('index',{student})
})

app.listen(port,err=>{
    err? console.log(err):console.log('server start on the port '+ port)
})