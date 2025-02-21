const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    }
})

const userSchema = mongoose.model('user', schema)
module.exports = userSchema 