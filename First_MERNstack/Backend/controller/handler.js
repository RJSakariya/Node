const userSchema = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.signup = (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    if (name && email && password && confirmPassword) {
        if (password == confirmPassword) {
            userSchema.findOne({ email: email }).then(async (user) => {
                if (!user) {
                    const bcryptedPassword = await bcrypt.hash(password, 11)
                    userSchema.create({ name, email, password: bcryptedPassword }).then((user) => {
                        const token = jwt.sign({ user }, "messengerissecure")
                        res.status(200).json({ message: "You've successfully signed up.", token })
                    })
                } else {
                    res.status(409).json({ message: "The email address is already in use. Please try a different one." })
                }
            })
        } else {
            res.status(400).json({ message: "Password and Confirm Password must be same." })
        }
    } else {
        res.status(400).json({ message: "Fill out every field because they are all necessary." })
    }
}
module.exports.login = (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        userSchema.findOne({ email: email }).then(async (user) => {
            if (user) {
                const checkedPassword = await bcrypt.compare(password, user.password)
                if (checkedPassword) {
                    const token = jwt.sign({ user }, "messengerissecure")
                    res.status(200).json({ message: "You've successfully login.", token })
                } else {
                    res.status(404).json({ message: "Password is wrong." })
                }
            } else {
                res.status(404).json({ message: "Try a different email address or sign up with this one as the email address cannot be found." })
            }
        })
    } else {
        res.status(400).json({ message: "Fill out every field because they are all necessary." })
    }
}