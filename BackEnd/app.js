//importing packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//importing routes
const product = require('./routes/productsRoutes')

const app = express();

app.use(cors())

//routes
app.use('/products',product)

//connection to database and the app running
mongoose.connect(process.env.mongodbUrl)
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log('mongoose connection error:',err)
})
