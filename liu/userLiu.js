var login=require("./login");
var register=require("./register");

var loginDo=(username,password,callback)=>{
    login.login(username,password,(res)=>{
        callback(res)
    })
}


var registerDo=(username,password,callback)=>{
    register.register(username,password,(res)=>{
        callback(res)
    })
}

exports.login=loginDo;
exports.register=registerDo;