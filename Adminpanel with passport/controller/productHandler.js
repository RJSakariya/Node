const extraCategorySchema = require('../model/extraCategorySchema')
const productSchema = require('../model/productSchema')

module.exports.addProd = async (req, res) => {
  await extraCategorySchema.find({}).populate({
    path: "subcategoryid",
    populate: {
      path: "categoryid"
    }
  }).then((data) => {
    res.render('addProduct', { data })
  })
}
module.exports.addProduct = async (req, res) => {
  await productSchema.create(req.body).then(() => {
    res.redirect('/product/addProduct')
  })
}

module.exports.viewProduct = async (req, res) => {
  await productSchema.find({}).populate({
    path:'extracategoryid',
    populate: {
      path: "subcategoryid",
      populate: {
        path: "categoryid"
      }
    }
  }).then((data) => {
    res.render('viewProduct', { data })
  })
}

module.exports.editProduct = async (req, res) => {
  const singleData = await productSchema.findById(req.query.id).populate('extracategoryid')
  extraCategorySchema.find({}).populate({
    path: "subcategoryid",
    populate: {
      path: "categoryid"
    }
  }).then((extraCategories) => {
    res.render('editProduct', { singleData, extraCategories })
  })
}
module.exports.updateProduct = async (req, res) => {
  await productSchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect('/product/viewProduct')
  })
}

module.exports.deleteProduct = async (req, res) => {
  await productSchema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect('/product/viewProduct')
  })
}