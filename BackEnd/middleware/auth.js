const userDB = require('../model/userModel')
const jwt=require("jsonwebtoken")

exports.userAuthontication=async (req, res, next)=>{
  try{
      const token = req.header("Authorization")
      const user = jwt.verify(token,"saltxyz")
      const data = await userDB.find({"_id":user.userId})
      req.user=data
      next()
  }catch(err){
    console.log("error in auth",err)
    res.json({Error:err})
  }
}