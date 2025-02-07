const categorySchema = require('../model/categorySchema')
const fs = require('fs')
module.exports.addCat = (req, res) => {
    res.render('addCategory')
}
module.exports.addCategory = async (req, res) => {
    req.body.img = req.file.path
    await categorySchema.create(req.body).then(() => {
        res.redirect('/category/addCategory')
    })
}
module.exports.viewCategory = async (req, res) => {
    await categorySchema.find({}).then((data) => {
        res.render('viewCategory', { data })
    })
}

module.exports.editCategory = async (req, res) => {
    await categorySchema.findById(req.query.id).then((data) => {
        res.render('editCategory', { data })
    })
}
module.exports.updateCategory = async (req, res) => {
    let img = ""
    let singleData = await categorySchema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.img
    req.file && fs.unlinkSync(singleData.img)
    req.body.img = img
    await categorySchema.findByIdAndUpdate(req.body.id, req.body).then((data) => {
        res.redirect('/category/viewCategory')
    })
}
module.exports.deleteCategory = async (req, res) => {
    const singleCategory = await categorySchema.findById(req.query.id)
    fs.unlinkSync(singleCategory.img)
    await categorySchema.findByIdAndDelete(req.query.id).then((data) => {
        res.redirect('/category/viewCategory')
    })
}