const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student
