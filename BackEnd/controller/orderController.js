const orderSchema = require('../model/orderModel');

exports.addOrder=async (req,res,next)=>{
    try{
        const userId = req.user[0]._id;
        const productId = req.params.productId;
        const paymentId = req.body.paymentId;

        const data = new orderSchema({
            paymentId,
            userId,
            productId
        })
        await data.save()
        res.json({success:true})

    }catch(err){
        console.log("Razor pay error",err)
        res.json({Error:err,success:false})
    }
}

exports.getOrder = async (req, res) => {
    try{
        const userId = req.user[0]._id;
        const data = await orderSchema.find({userId : userId})
        .populate('productId')
        .populate('userId')
        .exec()
        res.json({success:true, data:data})
    }catch(err){
        res.json({success:false, Error:err})
    }
}