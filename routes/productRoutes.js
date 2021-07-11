const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { getProducts, getLatestProducts, getProductById } = require('../controllers/productController')

router.route('/').get(protect, getProducts)
router.route('/latest').get(getLatestProducts)
router.route('/:id').get(protect, getProductById)

module.exports = router
