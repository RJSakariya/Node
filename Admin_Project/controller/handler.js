const adminSchema = require('../model/adminSchema')
const fs = require('fs')
const nodemailer = require('../middleware/nodemailer')
module.exports.loginForm = (req, res) => {
    res.render('login')
}
module.exports.login = async (req, res) => {
    res.redirect('/dashboard')
}
module.exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}
module.exports.dashboard = (req, res) => {
    res.render('dashboard')
}
module.exports.viewAdmin = async (req, res) => {
    const admins = await adminSchema.find({})
    res.render('viewAdmin', { admins })
    res.end()
}
module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
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

module.exports.changePasswordForm = (req, res) => {
    res.render('changePassword')
    res.end()
}

module.exports.changePassword = async (req, res) => {
    const admin = req.user
    const { password, newpass, confirmpass } = req.body
    if (password === admin.password) {
        if (password !== newpass) {
            if (newpass === confirmpass) {
                await adminSchema.findByIdAndUpdate(admin.id, { password: newpass }).then((user) => {
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
module.exports.sendOTP = async (req, res) => {
    res.render('sendotp')
    res.end()
}
module.exports.sendOtp = async (req, res) => {
    const admin = await adminSchema.findOne({ email: req.body.email })
    if (admin) {
        const otp = Math.floor(1000 + Math.random() * 9000);
        req.session.adminId = admin._id
        req.session.otp = otp
        nodemailer.sendOTP(req.body.email, otp)
        res.render('forgetPass')
    } else {
        res.redirect('/')
    }
}
module.exports.forgetPass = async (req, res) => {
    const { OTP, newpass, confirmpass } = req.body
    if (req.session.otp == OTP) {
        if (newpass === confirmpass) {
            await adminSchema.findByIdAndUpdate(req.session.adminId, { password: newpass }).then((user) => {
                res.redirect('/logout')
            })
        } else {
            console.log('new password and confirm password must be same')
        }
    } else {
        res.redirect('/')
    }
}