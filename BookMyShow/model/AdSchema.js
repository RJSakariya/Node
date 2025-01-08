const mongoose = require('mongoose')
const schema = mongoose.Schema({
    AdImage: {
        required: true,
        type: String,
    }
})
const AdSchema = mongoose.model('AdImage', schema)
module.exports = AdSchema