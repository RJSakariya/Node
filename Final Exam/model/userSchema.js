const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    role:{
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    }
})
const userSchema = mongoose.model('/user',schema)
module.exports = userSchema