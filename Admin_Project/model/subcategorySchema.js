const mongoose = require('mongoose')
const schema = mongoose.Schema({
    subcategory: {
        type: String,
        required: true,
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"category",
        required: true,
    }
})
const subcategory = mongoose.model('subcategory',schema)
module.exports = subcategory