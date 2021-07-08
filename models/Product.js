const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  description: String,
  categories: [String],
  client: String,
}, { timestamps: true })

const Product = mongoose.model('Products', ProductSchema)

module.exports = Product
