const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/api')
const db = mongoose.connection

module.exports = db