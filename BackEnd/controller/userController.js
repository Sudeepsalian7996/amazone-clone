const userdb=require("../model/userModel")
const encrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//sign up page
exports.signup=async(req,res)=>{
   try{
      const name=req.body.name
      const email=req.body.email
      const password=req.body.password1
      const phone = req.body.phoneNumber
   
      encrypt.hash(password,10,async(err,hash)=>{
         if(err){
            console.log("encryption error-->",err)  
         }
          const emailUnique=await userdb.find({"email":email})

         if(emailUnique.length!==0){
            return res.json({success:false,message:"user already exist,change the Email"})
         }

           const data= new userdb({
            name:name,
            email:email,
            password:hash ,
            phone:phone
           })
           const response = await data.save()
           res.json({success:true,token:createToken(response._id)})
      })
   
   }catch(err){
      console.log("signup err")
      res.json({success:false,message:"User already exist..please signup with new Email and Password"})
   }
  
}

//creating tokens
function createToken(id){
   return jwt.sign({userId:id},"saltxyz")
}

//signin page
exports.signin=async(req,res)=>{
   try{
      const email=req.body.email
      const password=req.body.password
      if(email==="" || password===""){
         return res.json({message:"Email or password missing"})
      }

      const emaildb=await userdb.find({"email":email})
      if(emaildb.length>0){
         encrypt.compare(password,emaildb[0].password,(err,result)=>{
            if(err){
               throw new Error("Something went wrong in decypting password")
            }
            
            if(result===true){
               res.json({success:true,message:"login Successfully Done",token:createToken(emaildb[0].id)})
               
            } else{
               res.json({success:false,message:"Password is incorrect!"})
            }
         })
      }
     else{
         res.json({success:false ,message:"User does not exist!"})
      }
 
   }catch(err){
      console.log("error in login BE")
      res.json({Error:err})
   }
}
