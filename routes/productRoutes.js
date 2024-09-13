
const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/products', productController.getProducts);

router.get('/products/:id', productController.getOneCategoryProduct);

router.get('/product/:id', productController.getProduct);


module.exports = router;