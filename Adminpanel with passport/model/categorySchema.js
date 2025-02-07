const mongoose = require('mongoose')
const schema = mongoose.Schema({
    category: {
        required: true,
        type: String,
    },
    img: {
        required: true,
        type: String,
    }

})
const categorySchema = mongoose.model('category',schema)
module.exports = categorySchema