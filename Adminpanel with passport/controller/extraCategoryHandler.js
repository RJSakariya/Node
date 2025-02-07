const subCategorySchema = require('../model/subCategorySchema')
const extraCategorySchema = require('../model/extraCategorySchema')

module.exports.addExtraCat = async (req, res) => {
  await subCategorySchema.find({}).populate({
    path: "categoryid"
  }).then((data) => {
    res.render('addExtraCategory', { data })
  })
}
module.exports.addExtraCategory = async (req, res) => {
  await extraCategorySchema.create(req.body).then(() => {
    res.redirect('/extraCategory/addExtraCategory')
  })
}

module.exports.viewExtraCategory = async (req, res) => {
  await extraCategorySchema.find({}).populate({
    path: "subcategoryid",
    populate: {
      path: "categoryid"
    }
  }).then((data) => {
    res.render('viewExtraCategory', { data })
  })
}

module.exports.editExtraCategory = async (req, res) => {
  const singleData = await extraCategorySchema.findById(req.query.id).populate('subcategoryid')
  subCategorySchema.find({}).populate({
    path: "categoryid"
  }).then((subCategories) => {
    res.render('editExtraCategory', { singleData, subCategories })
  })
}
module.exports.updateExtraCategory = async (req, res) => {
  await extraCategorySchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect('/extraCategory/viewExtraCategory')
  })
}

module.exports.deleteExtraCategory = async (req, res) => {
  await extraCategorySchema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect('/extraCategory/viewExtraCategory')
  })
}