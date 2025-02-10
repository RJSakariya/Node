const subcategorySchema = require("../model/subcategorySchema")
const productSchema = require("../model/productSchema")
const subcategory = require("../model/subcategorySchema")

module.exports.addproduct = (req, res) => {
    subcategorySchema.find({}).populate('categoryid').then((data) => {
        res.render('addproduct', { data })
    })
}

module.exports.addproductin = async (req, res) => {
    await productSchema.create(req.body).then(() => {
        res.redirect('/product/addproduct')
    })
}
module.exports.viewproduct = async (req, res) => {
    await productSchema.find({}).populate({
        path: 'subcategoryid',
        populate: {
            path: 'categoryid'
        }
    }).then((data) => {
        res.render('viewproduct', { data })
    })
}

module.exports.deleteproduct = async (req, res) => {
    await productSchema.findByIdAndDelete(req.query.id).then((data) => {
        res.redirect('/product/viewproduct')
    })
}

module.exports.editproduct = async (req, res) => {
    const subcategory = await subcategorySchema.find({}).populate('categoryid')
    await productSchema.findById(req.query.id).populate({
        path: 'subcategoryid',
        populate: {
            path: 'categoryid'
        }
    }).then((data) => {
        res.render('editproduct', { data, subcategory })
    })

}

module.exports.updateproduct = async (req, res) => {
    await productSchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/product/viewproduct')
    })
}