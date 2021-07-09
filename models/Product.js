const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  images: [String],
  description: String,
  categories: [String],
  client: String,
  from: Date,
  to: Date
})

const Product = mongoose.model('Products', ProductSchema)

module.exports = Product
