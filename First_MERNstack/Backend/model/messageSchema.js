const mongoose = require('mongoose')
const schema = mongoose.Schema({
    user: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message: {
        required: true,
        type: String,
    }
})

const messageSchema = mongoose.model('message', schema)
module.exports = messageSchema 