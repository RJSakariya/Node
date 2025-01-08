const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now().toString()}`)
    }
})
module.exports.adImage = multer({ storage }).single('AdImage')
module.exports.movie = multer({ storage }).fields([
    { name: 'image', maxCount: 1 },
    { name: 'bgImage', maxCount: 1 },
]);