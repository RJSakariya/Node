const userSchema = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.registerPage = (req, res) => {
    res.render('register');
};

module.exports.register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userSchema.create({ ...req.body, password: hashedPassword });
        const token = jwt.sign({ user }, 'taskmanagerissecure', { expiresIn: '1h' });
        res.cookie('token', token);
        res.redirect('/task');
    } catch (err) {
        res.status(500).send('Registration failed.');
    }
};

module.exports.loginPage = (req, res) => {
    res.render('login');
};

module.exports.login = async (req, res) => {
    try {
        const user = await userSchema.findOne({ name: req.body.name });
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                const token = jwt.sign({ user }, 'taskmanagerissecure', { expiresIn: '1h' });
                res.cookie('token', token);
                res.redirect('/task');
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/register');
        }
    } catch (err) {
        res.status(500).send('Login failed.');
    }
};

module.exports.signOut = (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
}
