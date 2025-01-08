const express = require('express')
const route = express.Router()
const handler = require('../controller/handler')
const upload = require('../middleware/upload')

route.get('/', handler.home)
route.get('/AdminPanel', handler.adminPanel)
route.post('/addNewAd', upload.adImage, handler.addNewAd)
route.get('/deleteAd/:id', handler.deleteAd)
route.post('/addNewMovie', upload.movie, handler.addNewMovie)
route.get('/deleteMovie/:id', handler.deleteMovie)
route.get('/editMovie/:id', handler.editMovie)
route.post('/updateMovie',upload.movie,handler.updateMovie)
module.exports = route