//importing packages
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//importing routes
const product = require('./routes/productsRoutes')
const user = require('./routes/user')
const cart = require('./routes/cartRouter')

const app = express();

app.use(cors())
app.use(bodyparser.json())

//routes
app.use('/products',product)
app.use('/users',user)
app.use('/cart',cart)

//connection to database and the app running
mongoose.connect(process.env.mongodbUrl)
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log('mongoose connection error:',err)
})
