//��¼  
var connection = require("../config/config");//�������ǵ����ݿ�����  

var login = function(username,password,callback){
    var data = {};
    connection.getConnection.query('select * from user_info where username = "'+username+'";',function(error,rows,fields){//sql��ѯ  
        if(rows.length == 0){
            data.type = "fail";
            data.message = "�û��������ڣ�";
            callback(data);
        }else{
            if(rows[0].password == password){
                data.type = "success";
                data.message = "��¼�ɹ���";
                callback(data);
            }else{
                data.type = "fail";
                data.message = "�������";
                callback(data);
            }
        }
    });
}

exports.login = login;//�����ṩ���ǵ�login������  