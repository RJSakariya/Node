const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/SEOdashboard');
const database = mongoose.connection;
database.once('open',err=>err?console.log(err):console.log('database connected...'))
module.exports = database