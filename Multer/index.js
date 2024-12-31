const express = require('express')
const port = 2000
const app = express()
const path = require('path')
const fs = require('fs')
const database = require('./config/database')
const schema = require('./model/SSchema')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({ storage }).single('image')

app.set('view engine', 'ejs')
app.use(express.urlencoded())
app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.get('/', async (req, res) => {
await schema.find({}).then((Students) => {
        res.render('index', { Students })
        res.end()
    })
})
app.get('/addNew', (req, res) => {
    res.render('add')
    res.end()
})
app.post('/add', upload, async (req, res) => {
    req.body.image = req.file.path
    await schema.create(req.body).then(() => {
        res.redirect('/')
    })
})
app.get('/delete/:id', async (req, res) => {
    await schema.findById(req.params.id).then((student)=>{
        fs.unlinkSync(student.image)
    })
    await schema.findByIdAndDelete(req.params.id).then(()=>res.redirect('/'))
})
app.get('/edit', async (req, res) => {
    await schema.findById(req.query.id).then((student)=>{
    res.render('edit',{student})
    res.end()
    })
})
app.post('/update', upload, async (req, res) => {
    const student = await schema.findById(req.body.id)
    const image = req.file ? req.file.path : student.image
    req.file && fs.unlinkSync(student.image)
    req.body.image = image
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>res.redirect('/'))
})
app.listen(port, err => err ? console.log(err) : console.log('Server Started...'))