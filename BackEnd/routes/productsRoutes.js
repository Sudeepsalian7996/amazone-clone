const express = require('express');
const routes = express.Router();

//product controller
const product = require('../controller/productsController')

routes.get('/get-products',product.getProducts)

routes.get('/add-products', product.addProducts)

module.exports = routes ;