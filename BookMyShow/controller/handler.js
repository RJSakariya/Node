const adSchema = require('../model/AdSchema')
const movieSchema = require('../model/movieSchema')
const fs = require('fs')
module.exports.home = (req, res) => {
    res.render('index');
    res.end();
}
module.exports.adminPanel = async (req, res) => {
    const Ads = await adSchema.find({})
    const Movie = await movieSchema.find({})
    res.render('adminPanel', { Ads, Movie })
    res.end()
}
module.exports.addNewAd = async (req, res) => {
    req.body.AdImage = req.file.path
    await adSchema.create(req.body).then((data) => {
        res.redirect('/adminPanel')
    })
}
module.exports.deleteAd = async (req, res) => {
    await adSchema.findById(req.params.id).then((data) => {
        fs.unlinkSync(data.AdImage)
    })
    await adSchema.findByIdAndDelete(req.params.id).then(() => res.redirect('/adminPanel'))
}
module.exports.addNewMovie = async (req, res) => {
    req.body.image = req.files.image[0].path
    req.body.bgImage = req.files.bgImage[0].path
    await movieSchema.create(req.body).then((data) => {
        res.redirect('/adminPanel')
    })
}
module.exports.deleteMovie = async (req, res) => {
    await movieSchema.findById(req.params.id).then((data) => {
        fs.unlinkSync(data.image)
        fs.unlinkSync(data.bgImage)
    })
    await movieSchema.findByIdAndDelete(req.params.id).then(() => res.redirect('/adminPanel'))
}
module.exports.editMovie = async (req, res) => {
    const singleMovie = await movieSchema.findById(req.params.id)
    res.render('editForm', { singleMovie })
    res.end()
}
module.exports.updateMovie = async (req, res) => {
    let image = "";
    let bgImage = "";
    const singleMovie = await movieSchema.findById(req.body.id)
    req.files.image ? image = req.files.image[0].path : image = singleMovie.image;
    req.files.bgImage ? bgImage = req.files.bgImage[0].path : bgImage = singleMovie.bgImage;
    req.files.image && fs.unlinkSync(singleMovie.image)
    req.files.bgImage && fs.unlinkSync(singleMovie.bgImage)
    req.body.image = image;
    req.body.bgImage = bgImage;
    await movieSchema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
            res.redirect('/AdminPanel')
        })
}