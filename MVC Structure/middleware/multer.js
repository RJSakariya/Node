const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'upload/')
    },
    filename:(req,file,cd)=>{
        cd(null,file.fieldname +"-"+Date.now())
    }
})
const upload = multer({storage:storage}).single('image')
module.exports = upload