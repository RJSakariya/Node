const subCategorySchema = require('../model/subCategorySchema')
const categorySchema = require('../model/categorySchema')

module.exports.addSubCat = async (req, res) => {
  await categorySchema.find({}).then((data) => {
    res.render('addSubCategory', { data })
  })
}
module.exports.addSubCategory = async (req, res) => {
  await subCategorySchema.create(req.body).then(() => {
    res.redirect('/subCategory/addSubCategory')
  })
}

module.exports.viewSubCategory = async (req, res) => {
  await subCategorySchema.find({}).populate("categoryid").then((data) => {
    res.render('viewSubCategory', { data })
  })
}

module.exports.editSubCategory = async (req, res) => {
  const singleData = await subCategorySchema.findById(req.query.id).populate('categoryid')
  categorySchema.find({}).then((categories) => {
    res.render('editSubCategory', { singleData, categories })
  })
}
module.exports.updateSubCategory = async (req, res) => {
  await subCategorySchema.findByIdAndUpdate(req.body.id, req.body).then(()=>{
    res.redirect('/subCategory/viewSubCategory')
  })
}

module.exports.deleteSubCategory = async (req, res) => {
  await subCategorySchema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect('/subCategory/viewSubCategory')
  })
}