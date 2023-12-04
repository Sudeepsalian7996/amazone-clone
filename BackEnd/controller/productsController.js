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
        const data = new productSchema ({
            title : 'Cetaphil Face Wash',
            imageUrl: 'https://m.media-amazon.com/images/I/31K5tBuI3ZL._SX300_SY300_QL70_FMwebp_.jpg',
            description: 'IDEAL FOR DRY TO NORMAL SENSITIVE SKIN: Non-Comedogenic, Hypoallergenic formula free from Parabens, Sulphates, Fragrances & Oils',
            price: '1087'
        })
        await data.save()
    }catch(err){
        console.log('Error from add products:',err)
    }
}