const adminSchema = require('../model/adminSchema')
const fs = require('fs')

module.exports.loginForm = (req, res) => {
    res.render('loginForm')
    res.end()
}
module.exports.login = async (req, res) => {
    res.redirect('/dashboard')
}
module.exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}
module.exports.home = (req, res) => {
    res.render('index')
    res.end()
}
module.exports.profile = (req, res) => {
    res.render('profile')
    res.end()
}
module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
    res.end()
}
module.exports.viewAdmin = async (req, res) => {
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
module.exports.Delete = async (req, res) => {
    const singleAdmin = await adminSchema.findById(req.params.id)
    fs.unlinkSync(singleAdmin.profile)
    await adminSchema.findByIdAndDelete(req.params.id).then((data) => {
        res.redirect('/viewAdmin')
    })
}
module.exports.Edit = async (req, res) => {
    await adminSchema.findById(req.params.id).then((singleAdmin) => {
        res.render('editAdmin', { singleAdmin })
    })
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

module.exports.changePasswordForm = (req, res) => {
    res.render('changePassword')
    res.end()
}

module.exports.changePassword = async (req, res) => {
    const admin = req.user
    const { oldPassword, newPassword, confirmPassword } = req.body
    if (oldPassword === admin.password) {
        if (oldPassword !== newPassword) {
            if (newPassword === confirmPassword) {
                await adminSchema.findByIdAndUpdate(admin.id, { password: newPassword }).then((user) => {
                    res.redirect('/logout')
                })
            } else {
                console.log('new password and confirm password must be same')
            }
        } else {
            console.log('old password and new password must be different')
        }
    } else {
        console.log('please write correct old password')
    }
}