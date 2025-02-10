const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}`)
    }
})
const uploadimg = multer({ storage: storage }).single('img')
module.exports = uploadimg