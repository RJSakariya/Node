const mongoose = require('mongoose')

const schema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    extracategoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"extracategory",
        required: true,
    }
})
const productSchema = mongoose.model('product',schema)
module.exports = productSchema