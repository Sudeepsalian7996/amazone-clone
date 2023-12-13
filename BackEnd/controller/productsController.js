const productSchema = require('../model/productsModel');

exports.getProducts = async (req, res) => {
    try{
        const data = await productSchema.find();
        res.json({data:data})
    }catch(err){
        console.log('Error from get products:',err)
    }
}

exports.addProducts = async (req, res) => {
    try{
        const title = req.body.title;
        const description = req.body.description;
        const imageurl = req.body.imageurl;
        const price = req.body.price;
        const offer = req.body.offer;
        const rating = req.body.rating;

        const data = new productSchema ({
            title : title,
            imageUrl: imageurl,
            description: description,
            price: price,
            offer: offer,
            rating: rating,
            userId: '657729ab04a71a96b84e2db2'
        })
        await data.save()
        res.json({success:true})
    }catch(err){
        console.log('Error from add products:',err)
        res.json({success:false})
    }
}

exports.getProductDetail = async ( req, res) => {
    try{
        const id = req.params.id;
        const data = await productSchema.findById(id)
        res.json({data:data})
    }catch(err){
        console.log('Error in get product:',err)
    }
}