const cartSchema = require('../model/cartModel');
const productSchema = require('../model/productsModel')

exports.getCart = async (req, res) => {
   try{
    const userId = req.user[0]._id;

    const allProducts = await cartSchema.find({ user : userId })
    const productIds = allProducts.map(prod => prod.product);
    const productDetails = await productSchema.find({ _id : {$in : productIds}})

    res.json({data:productDetails, cart:allProducts})

   }catch(err){
     res.json({success:false, Error:err})
   }
    
}

exports.addCart = async (req, res) => {
    try{
        const userId = req.user[0]._id;
        const productId = req.params.productId;
        
        const filter = { user: userId, product: productId };
        const update =  { $inc: { quantity: 1 } };

        const existingData = await cartSchema.findOneAndUpdate(
            filter,
            update,
            { new: true, upsert: true } 
        );
        res.json({success:true})
    }catch(err){
        res.json({success:false,Error:err})
    }

}