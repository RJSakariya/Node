const mongoose = require('mongoose')
const schema = mongoose.Schema({
image:{
    required: true,
    type:String,
},title:{
    required: true,
    type:String,
},author:{
    required: true,
    type:String,
},price:{
    required: true,
    type:String,
},description:{
    required: true,
    type:String,
}
})
const data = mongoose.model('Book',schema)
module.exports = data