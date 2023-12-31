const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type : String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    price: {
        type : Number,
        required: true
    },
    offer: {
        type : Number,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model('product', productSchema)