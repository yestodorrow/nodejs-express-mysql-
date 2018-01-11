var express=require("express");
var router=express.Router();

var userLiu=require("../liu/userLiu")

router.get("/",(req,res,callback)=>{
    userLiu.login(req.query.username,req.query.password,function(result){
        res.json({status:200,result})
    })
})
module.exports=router;
