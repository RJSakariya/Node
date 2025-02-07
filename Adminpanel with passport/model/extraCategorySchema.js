const mongoose = require('mongoose')

const schema = mongoose.Schema({
    extracategory: {
        type: String,
        required: true,
    },
    subcategoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"subcategory",
        required: true,
    }
})
const extraCategory = mongoose.model('extracategory',schema)
module.exports = extraCategory