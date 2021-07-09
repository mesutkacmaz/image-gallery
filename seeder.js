const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users')
const products = require('./data/products')
const Product = require('./models/Product')
const User = require('./models/User')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()

    await User.insertMany(users)
    await Product.insertMany(products)
    console.log('Data Imported!')
    process.exit()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
