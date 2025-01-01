const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/StudentDatabase')
const database = mongoose.connection;
database.once('open',err=>err?console.log(err):console.log('Database Connected...'))
module.exports = database;