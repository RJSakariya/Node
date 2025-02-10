const categorySchema = require('../model/categorySchema')


module.exports.addcat = (req,res)=>{
    res.render('addcat')
}

module.exports.addcategory = async (req,res)=>{
    req.body.img = req.file.path
 await categorySchema.create(req.body).then((data)=>{
        res.redirect("/category/addcat")
 })
} 

module.exports.viewcategory = async(req,res)=>{
 await categorySchema.find({}).then((data)=>{
    res.render("viewcategory",{data})
 })
}