const express=require("express")

const routes=express.Router()

const userController = require('../controller/userController')

routes.post("/signup",userController.signup)

routes.post("/signin",userController.signin)

module.exports=routes