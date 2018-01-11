var express=require("express")
var router=express.router();
var userLiu=require("../liu/userLiu");

router.get("/",(req,res,callback)=>{
    userLiu.register(req.query.username,req.query.password,(result)=>{
        res.json({status:200,result})
    })
})

module.exports=router;
