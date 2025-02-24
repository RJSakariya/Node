const jwt = require('jsonwebtoken');

module.exports.check = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/register');
    }

    try {
        const data = jwt.verify(token, "taskmanagerissecure");
        req.user = data;
        next();
    } catch (error) {
        console.error('JWT verification failed:', error);
        res.redirect('/register');
    }
};
