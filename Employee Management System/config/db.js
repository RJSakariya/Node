const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/EmployeeManagmentSystem');
const db = mongoose.connection;

db.once("open",(err)=>{
    err?console.log(err):console.log("Connected to MongoDB");
})

module.exports = db;