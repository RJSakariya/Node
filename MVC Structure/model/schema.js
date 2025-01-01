const mongoose = require('mongoose')

const student = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    course: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    }
})
const SSchema = mongoose.model('Student',student)
module.exports = SSchema;