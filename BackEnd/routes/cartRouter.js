const express = require('express');
const routes = express.Router();

//cart controller
const cart = require('../controller/cartController')
const middleware = require('../middleware/auth')

routes.get('/get-cart', middleware.userAuthontication, cart.getCart)

routes.post('/add-cart/:productId', middleware.userAuthontication, cart.addCart)

module.exports = routes ;