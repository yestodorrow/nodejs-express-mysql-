/**
 * Created by BJDGZJD on 2018/1/11.
 */
//ע��
var connection = require("../config/config");

var regist = function(username,password,callback){
    var data = {};
    connection.getConnection.query("insert into user_info(username,password) values('"+username+"','"+password+"');",function(error,rows,fields){
        if (rows!=undefined) {
            data.type = 'success';
            data.message = 'ע��ɹ���';
            callback(data);
        }else{
            data.type = 'fail';
            data.message = '�ֻ����������';
            callback(data);
        }
    });
}

exports.regist = regist;