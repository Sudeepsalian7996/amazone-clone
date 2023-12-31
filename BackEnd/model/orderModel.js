const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    paymentId: {
        type : String
    },
    date:{
        type : Date,
        default: new Date()
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product"
    }
})
module.exports = mongoose.model("Order", orderSchema)
