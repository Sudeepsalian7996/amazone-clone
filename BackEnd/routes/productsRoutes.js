const express = require('express');
const routes = express.Router();

//product controller
const product = require('../controller/productsController')

routes.get('/get-products',product.getProducts)

routes.get('/product-detail/:id',product.getProductDetail)

routes.post('/add-products', product.addProducts)

module.exports = routes ;