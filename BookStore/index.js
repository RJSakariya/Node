const express = require('express')
const port = 2000
const app = express()
let Books = [{'id':'324mnbvsnd2','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAkmuLe5t04pqAdlj0YB8eH2fuikKN6eumA&s','title':'kjdsflk','author':'sdghndf','price':'213','discription':'hjsejdfn fjdsnbf sdf'}]
app.set('view engine', 'ejs')
app.use(express.urlencoded())
app.get('/', (req, res) => {
    res.render('index', { Books })
    res.end()
})
app.get('/AddBook', (req, res) => {
    res.render('AddBook')
    res.end()
})
app.post('/Add', (req, res) => {
    req.body.id = String(Date.now())
    Books.push(req.body)
    res.redirect('/')
})
app.get('/EditBook/:id', (req, res) => {
    const singleBook = Books.find((book)=>book.id === req.params.id)
    console.log(singleBook);
    
    res.render('EditBook', { singleBook })
    res.end()
})
app.post('/Update', (req, res) => {
    Books.map((book) => book.id == req.body.id ? req.body : book)
    res.redirect('/')
})

app.get('/Delete', (req, res) => {
    const DeleteBook = Books.filter((book) => book.id !== req.query.id)
    Books = DeleteBook
    res.redirect('/')
})

app.listen(port, err => {
    err ? console.log(err) : console.log("Server Started...");
})