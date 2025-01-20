const adminSchema = require('../model/adminSchema')
const fs = require('fs')

module.exports.loginForm = (req, res) => {
    res.render('login')
    res.end()
}
module.exports.login = (req, res) => {
    res.redirect('/dashboard')
}
module.exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}
module.exports.dashboard = (req, res) => {
    res.render('dashboard')
    res.end()
}
module.exports.viewAdmin = async (req, res) => {
    const admins = await adminSchema.find({})
    res.render('viewAdmin', { admins })
    res.end()

}
module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
    res.end()
}
module.exports.addNewAdmin = async (req, res) => {
    req.body.img = req.file.path
    await adminSchema.create(req.body).then(() => {
        res.redirect('/viewAdmin')
    })
}
module.exports.delete = async (req, res) => {
    const admin = await adminSchema.findById(req.params.id)
    fs.unlinkSync(admin.img)
    await adminSchema.findByIdAndDelete(req.params.id).then(() => res.redirect('/viewAdmin'))
}
module.exports.edit = async (req, res) => {
    const admin = await adminSchema.findById(req.params.id)
    res.render('edit', { admin })

}
module.exports.update = async (req, res) => {
    let img = ""
    const admin = await adminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = admin.img
    req.file && fs.unlinkSync(admin.img)
    req.body.img = img
    await adminSchema.findByIdAndUpdate(req.body.id, req.body).then(() => res.redirect('/viewAdmin'))
}