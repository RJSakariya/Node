const mongoose = require('mongoose')
const schema = mongoose.Schema({
    image: {
        required: true,
        type: String,
    },
    bgImage: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    rate: {
        required: true,
        type: String,
    },
    formate: {
        required: true,
        type: String,
    },
    language: {
        required: true,
        type: String,
    },
    duration: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: String,
    },
    release: {
        required: true,
        type: String,
    },
})
const movieSchema = mongoose.model('movie', schema)
module.exports = movieSchema