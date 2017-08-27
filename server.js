var mysql = require('mysql') ;

var conn = mysql.createConnection({
    host:'localhost' ,
    user : 'root' ,
    password : '0810731113' ,
    database : 'node'
});

conn.connect(function(err){
    if(err) throw err ;
    console.log('connect success!')
});

//conn.query('SELECT * from users',function(err,result,fields){
//    if(err) throw err ;
//    console.log(result[0].username) ;
//
//})
console.log('select ended!') ;

//插入数据操作
//conn.query("INSERT INTO `user` SET `username`='qwerty', `password`='741', `email`='qwerty@qq.com'",
//    function(err, result){ if(err) throw err; console.log(result);
//    });

//conn.query("INSERT INTO `users` SET `username`='Lucy' , `age` = 88 ,`sex`='male' " ,
//    function(err,result){
//        if(err) throw err ;
//        console.log(result) ;
//})

//更新数据库
//conn.query('UPDATE `user` SET `password`="123456" WHERE `uid`=4',
//    function(err, result){ if(err) throw err; console.log(result);});

//conn.query("UPDATE `users` SET `username`='wangxiaoer' , `age` = 99 , `sex` = 'male' WHERE `id` =  5 ");

//删除数据库操作
//conn.query('DELETE FROM `user` WHERE `uid`=4',
//    function(err, result, fields){ if(err) throw err; console.log(result);});

//conn.query('DELETE FROM `users` WHERE `id` = 3' ,function(err,result,fields){
//    if(err) throw err ;
//    console.log(result) ;
//})

//conn.end(function(err){
//    if(err) throw err ;
//    console.log('connect end') ;
//})

//var pool = mysql.createPool({
//    host : 'localhost' ,
//    user: 'root' ,
//    password : '0810731113' ,
//    database : 'node'
//}) ;
//pool.getConnection(function(err,connection){
//    if(err) throw err ;
//    connection.query('select * from `users`' , function(err,result){
//        if(err) throw err ;
//        console.log(result)
//    })
//})

console.log("=======================================")  ;
//pool.getConnection(function(err,connection){
//    if(err) throw err ;
//    var params1 = ['libo',30] ;
//
//    var query = connection.query('select * from `users` where `username` = ? and `age` = ?',
//        params1,function(err,result){
//            console.log(result)
//        })
//})

//pool.getConnection(function(err,connection){
//    if(err) throw err ;
//    var params = {username : 'Body','age' : 77,'sex' : 'female'} ;
//    var query = connection.query('insert into `users` set ? ' ,params,function(err,result){
//        if(err) throw err ;
//        console.log(result);
//    })
//})

//pool.getConnection(function(err,connection){
//    if(err) throw err ;
//    var params = ['users' , 'username' , 'Body','age','77'] ;
//    var query = connection.query('select * from ?? where ?? = ? and ?? = ?' ,
//    params,function(err,result){
//            console.log(result) ;
//        }
//    )
//})

//占位符
//var params = ['test', 'test'];
//var query = connection.query('SELECT * FROM `user` WHERE `username`=? AND `password`=?',
//    params,
//    function(err, result){ console.log(result);});console.log(query.sql);



//pool.on('connection' , function(connection){
//    console.log('new connection') ;
//})


//var aa = pool.query('SELECT SQL_CALC_FOUND_ROWS * from `users`') ;
//console.log('aa is '+aa);
//pool.query('SELECT FOUND_ROWS()')

//setTimeout(function(){
//
//    pool.getConnection(function(err,connection){
//        if(err) throw err ;
//        connection.query('select * from `users` where `id` < 2' ,function(err,result){
//            if(err) throw err ;
//            console.log(result)
//            connection.destroy() ;
//        })
//
//    })
//
//},1000)

var resultJson = {
    "@type":"table",
    "rows":[{
    "age":{"value":"11"},
    "id":{"value":"0011"},
    "username":{"value":"abc"},
    "sex":{"value":"female"},
    "userdata":{"recordState":"none"}},
    {"age":{"value":"77"},
        "id":{"value":"0013"},
        "username":{"value":"Lucy"},
        "sex":{"value":"female"},
        "userdata":{"recordState":"none"}
    }],

    "userdata":{
    "relationAlias":"age,id,username,calcCheckBox,sex",
        "relationTypes":"String,String,String,String,string",
        "sys.count":8
    }
}
/*
{ params: '{"columns":{"aas_id":{"name":"aas_id","type":"String"},"add_date":{"n
    ame":"add_date","type":"String"},"add_person":{"name":"add_person","type":"Strin
    g"},"calcCheckBox":{"name":"calcCheckBox","type":"String"},"calcCheckBox1":{"nam
    e":"calcCheckBox1","type":"Boolean"},"calcCheckBox2":{"name":"calcCheckBox2","ty
    pe":"Boolean"},"calcCheckBox3":{"name":"calcCheckBox3","type":"Boolean"},"calcCh
    eckBox4":{"name":"calcCheckBox4","type":"Boolean"},"complexity_id":{"name":"comp
    lexity_id","type":"String"},"content":{"name":"content","type":"String"},"examta
    ker_id":{"name":"examtaker_id","type":"String"},"faculty_id":{"name":"faculty_id
    ","type":"String"},"grade_id":{"name":"grade_id","type":"String"},"isfallible_id
    ":{"name":"isfallible_id","type":"String"},"item_analysis":{"name":"item_analysi
    s","type":"String"},"item_category_id":{"name":"item_category_id","type":"String
    "},"item_id":{"name":"item_id","type":"String"},"item_material":{"name":"item_ma
    terial","type":"String"},"knowledges":{"name":"knowledges","type":"String"},"opt
    ion_content1":{"name":"option_content1","type":"String"},"option_content2":{"nam
    e":"option_content2","type":"String"},"option_content3":{"name":"option_content3
    ","type":"String"},"option_content4":{"name":"option_content4","type":"String"},
    "papersource_id":{"name":"papersource_id","type":"String"},"part_bigno":{"name":
    "part_bigno","type":"String"},"part_type":{"name":"part_type","type":"String"},"
    right_answers":{"name":"right_answers","type":"String"},"subject_id":{"name":"su
    bject_id","type":"String"},"subject_score":{"name":"subject_score","type":"Strin
    g"},"version_id":{"name":"version_id","type":"String"},"vocation_id":{"name":"vo
    cation_id","type":"String"}},"limit":10,"offset":0,"item_category_id":"102","kno
    wledges":"","subject_id":"","grade_id":"","faculty_id":"","version_id":"","aas_i
    d":"","complexity_id":"","vocation_id":"","examtaker_id":"","papersource_id":"",
    "isfallible_id":"","item_id":""}' }

*/

function toJson(arr, columns) {
    var result = {
        "@type" : "table"
    };

    var str = '[{';// 所有数据
    for (var i = 0; i < arr.length; i++) {
        for ( var key in arr[i]) {
            str = str + '"' + key + '":{"value":"' + arr[i][key] + '"},';
        }
        str = str + '"userdata":{"recordState":"none"}},{';
    }
    str = (str.substring(str.length - 1) == '{') ? str.substring(0, str.length - 2) : str;
    str = str + ']';
    result.rows = JSON.parse(str);

    var userdata = {"sys.count": arr.length};
    var names = "";
    var types = "";


    for ( var col in columns) {
        names = names + col + ',';
    }
    var columnstr = JSON.stringify(columns);
    var array = columnstr.split('type":"');
    for(i = 1;i < array.length;i++){
        types = types + array[i].split('"}')[0]+',';
    }

    names = (names.substring(names.length - 1) == ',') ? names.substring(0, names.length - 1) : names;
    types = (types.substring(types.length - 1) == ',') ? types.substring(0, types.length - 1) : types;

    userdata.relationAlias = names;
    userdata.relationTypes = types;

    result.userdata = userdata;

    return result;
};


























































































