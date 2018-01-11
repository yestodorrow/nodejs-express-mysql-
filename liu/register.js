/**
 * Created by BJDGZJD on 2018/1/11.
 */
//注册
var connection = require("../config/config");

var regist = function(username,password,callback){
    var data = {};
    connection.getConnection.query("insert into user_info(username,password) values('"+username+"','"+password+"');",function(error,rows,fields){
        if (rows!=undefined) {
            data.type = 'success';
            data.message = '注册成功！';
            callback(data);
        }else{
            data.type = 'fail';
            data.message = '手机号输入错误！';
            callback(data);
        }
    });
}

exports.regist = regist;