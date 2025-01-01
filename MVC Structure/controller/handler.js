const schema = require('../model/schema')
const upload = require('../middleware/multer')
const fs = require('fs')
module.exports.root = async (req, res) => {
    await schema.find({}).then((Students) => {
        res.render('index', { Students })
        res.end()
    })
}
module.exports.addNew =(req, res) => {
    res.render('add')
    res.end()
}
module.exports.add =async (req, res) => {
    req.body.image = req.file.path
    await schema.create(req.body).then(() => {
        res.redirect('/')
    })
}
module.exports.delete=async (req, res) => {
    await schema.findById(req.params.id).then((student)=>{
        fs.unlinkSync(student.image)
    })
    await schema.findByIdAndDelete(req.params.id).then(()=>res.redirect('/'))
}
module.exports.edit=async (req, res) => {
    await schema.findById(req.query.id).then((student)=>{
    res.render('edit',{student})
    res.end()
    })
}
module.exports.update = async (req, res) => {
    const student = await schema.findById(req.body.id)
    const image = req.file ? req.file.path : student.image
    req.file && fs.unlinkSync(student.image)
    req.body.image = image
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>res.redirect('/'))
}