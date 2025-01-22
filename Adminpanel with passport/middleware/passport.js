const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const adminSchema = require('../model/adminSchema')

passport.use('local', new localStrategy({ usernameField: 'email' }, async (email, password, done) => {
    const admin = await adminSchema.findOne({ email: email })
    if (admin) {
        admin.password === password ? done(null, admin) : done(null, false)
    } else {
        done(null, false)
    }
}))

passport.serializeUser((admin, done) => {
    done(null, admin.id)
})
passport.deserializeUser(async (adminId, done) => {
    const admin = await adminSchema.findById(adminId)
    done(null, admin)
})

passport.adminInfo = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.admin = req.user
    }
    next()
}
passport.checkAuth = (req, res, next) => {
    req.isAuthenticated() ? next() : res.redirect('/')
}


module.exports = passport