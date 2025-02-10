const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const adminSchema = require('../model/adminSchema');

passport.use('local', new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        let admin = await adminSchema.findOne({ email: email })
        if (!admin) {
            return done(null, false, { message: 'Email not registered' })
        }

        if (admin.password !== password) {
            return done(null, false, { message: 'Incorrect password' })
        }
        return done(null, admin)
    }
));


passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
    let admin = await adminSchema.findById(id);
    done(null, admin);
});

passport.adminInfo = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.admin = req.user
    }
    next()
}

passport.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

module.exports = passport;
