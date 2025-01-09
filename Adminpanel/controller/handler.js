const adminSchema = require('../model/adminSchema')
const fs = require('fs')

module.exports.loginForm = (req, res) => {
    if (req.cookies.AdminData) {
        res.redirect('/dashboard')
    }
    else {
        res.render('loginForm')
        res.end()
    }
}
module.exports.login = async (req, res) => {
    await adminSchema.findOne({ email: req.body.email }).then((admin) => {
        if (admin) {
            if (admin.password === req.body.password) {
                res.cookie('AdminData', admin)
                res.redirect('/dashboard')
            }
            else {
                res.redirect('/')
            }
        }
        else {
            res.redirect('/')
        }
    })
}
module.exports.logout = (req, res) => {
    res.clearCookie('AdminData')
    res.redirect('/dashboard')
}
module.exports.home = (req, res) => {
    if (req.cookies.AdminData) {
        res.render('index')
        res.end()
    }
    else {
        res.redirect('/')
    }
}
module.exports.addAdmin = (req, res) => {
    if (req.cookies.AdminData) {
        res.render('addAdmin')
        res.end()
    }
    else {
        res.redirect('/')
    }
}
module.exports.viewAdmin = async (req, res) => {
    if (req.cookies.AdminData) {
        const adminData = await adminSchema.find({})
        res.render('viewAdmin', { adminData })
        res.end()
    }
    else {
        res.redirect('/')
    }
}
module.exports.addNewAdmin = async (req, res) => {
    req.body.profile = req.file.path;
    await adminSchema.create(req.body).then((data) => {
        res.redirect('/addAdmin')
    })
}
module.exports.Delete = async (req, res) => {
    const singleAdmin = await adminSchema.findById(req.params.id)
    fs.unlinkSync(singleAdmin.profile)
    await adminSchema.findByIdAndDelete(req.params.id).then((data) => {
        res.redirect('/viewAdmin')
    })
}
module.exports.Edit = async (req, res) => {
    if (req.cookies.AdminData) {
        await adminSchema.findById(req.params.id).then((singleAdmin) => {
            res.render('editAdmin', { singleAdmin })
        })
    }
    else {
        res.redirect('/')
    }
}
module.exports.Update = async (req, res) => {
    let profile = ""
    const singleAdmin = await adminSchema.findById(req.body.id)
    req.file ? profile = req.file.path : profile = singleAdmin.profile
    req.file && fs.unlinkSync(singleAdmin.profile)
    req.body.profile = profile
    await adminSchema.findByIdAndUpdate(req.body.id, req.body).then((data) => {
        res.redirect('/viewAdmin')
    })
}