const mongoose = require('mongoose')
const schema = mongoose.Schema({
    img: {
        required: true,
        type: String,
    },
    uname: {
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
const adminSchema = mongoose.model('/admin', schema)
module.exports = adminSchema