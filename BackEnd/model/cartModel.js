const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"
    },  
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    quantity: {
        type: Number
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model("cart",cartSchema)