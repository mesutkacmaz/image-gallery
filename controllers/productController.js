const asyncHandler = require('express-async-handler')
const Product = require('../models/Product')

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

exports.getLatestProducts = asyncHandler(async (req, res) => {
  const latestProducts = await Product.find().limit(3)
  res.json(latestProducts)
})

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
