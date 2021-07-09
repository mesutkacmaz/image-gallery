const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { getProducts, getProductById } = require('../controllers/productController')

router.route('/').get(protect, getProducts)

router.route('/:id').get(getProductById)

module.exports = router
