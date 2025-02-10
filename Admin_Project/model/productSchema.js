const mongoose = require('mongoose')
const schema = mongoose.Schema({
    productname: {
        required: true,
        type: String,
    },
    productprice: {
        required: true,
        type: Number,
    },
    productdescription: {
        required: true,
        type: String,
    },
    subcategoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
        required: true,
    },
   
})
const product = mongoose.model('product', schema)
module.exports = product