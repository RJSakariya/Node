const adminSchema = require('../model/adminSchema')

module.exports.home = (req, res) => {
    res.render('index')
    res.end()
}
module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
    res.end()
}
module.exports.viewAdmin = async(req, res) => {
    const adminData = await adminSchema.find({})
    res.render('viewAdmin', { adminData })
    res.end()
}
module.exports.addNewAdmin = async (req, res) => {
    req.body.profile = req.file.path;
    await adminSchema.create(req.body).then((data) => {
        res.redirect('/addAdmin')
    })
}