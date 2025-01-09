const mongoose = require('mongoose')
const schema = mongoose.Schema({
    fname: {
        required: true,
        type: String,
    },
    lname: {
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
    },
    dob: {
        required: true,
        type: String,
    },
    city: {
        required: true,
        type: String,
    },
    gender: {
        required: true,
        type: String,
    },
    languages: {
        required: true,
        type: Array,
    },
    profile: {
        required: true,
        type: String,
    }

})
const adminSchema = mongoose.model('Admin',schema)
module.exports = adminSchema