
const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/product', productController.getProduct);

router.get('/product/:id', productController.getOneCategoryProduct);


module.exports = router;