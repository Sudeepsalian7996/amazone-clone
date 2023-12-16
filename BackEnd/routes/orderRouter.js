const express = require('express');
const routes = express.Router();

//cart controller
const order = require('../controller/orderController')
const middleware = require('../middleware/auth')

routes.get('/get-cart', middleware.userAuthontication, order.getOrder)

routes.post('/add-order/:productId', middleware.userAuthontication, order.addOrder)


module.exports = routes ;