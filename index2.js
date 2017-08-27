var express = require('express')
var mysql = require('mysql') ;
var bodyParser =require('body-parser') ;
var session = require('express-session');

var app = module.exports = express() ;

app.use(express.static(__dirname + '/demo')) ;


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.urlencoded({
    extended : false
}))




app.get('/',function(req,res){
    res.sendfile(__dirname + '/demo' +'/index.html' );
})



//var pool = mysql.createPool({
//    host : 'localhost' ,
//    user : 'root' ,
//    password : '0810731113' ,
//    database : 'node'
//
//});

var pool = mysql.createPool({
    host : '192.168.3.3' ,
    user : 'root' ,
    password : 'x5' ,
    database : 'yk_room',
    multipleStatements: true

});

//过滤字段
var filterStr = "calcCheckBox";
function filteredArray(element,index,array){
    return element.indexOf(filterStr) < 0 ;
}

//对象转换为map
function objToStrMap(obj){
    var strMap = new Map() ;
    for(var k of Object.keys(obj)){
        strMap.set(k , obj[k]) ;
    }
    return strMap ;
}

//排除关键字段
var externalCols = ['columns','limit','offset','search'];

app.get('/btnEvent',function(req,res){
    console.log("Welcome!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;

    console.log(req.query) ;

    console.log(req.params)
    var resJson = {} ;
    //var queryAction = req.query.action ;

    //var sql = 'SELECT * FROM `user` WHERE `uid`='+connection.escape('"123";//--');
    //var myResult = querySql(sql) ;
    //var querySql = 'select * from `users` where `id` = 14 ' ;
    //var querySql = 'select * from `pub_school` ' ;
    //var tableName = 'pub_school'  ;
    //var params = 'pub_school' ;
    var params = 'ykr_item' ;
    //排序字段名
    //var sortColumn = 'school_code' ;
    var sortColumn = 'add_date' ;
    //var querySql = 'select scool_name, scool_code from `pub_school` ' ;
    //var querySql = 'select `school_name`, `school_code` from `pub_school` ' ;

    //var querySqlTest = 'select `school_name`, `school_code` from ?? ' ;

    var qj = req.query.params ;
    if(typeof qj != "object" ){
        qj = JSON.parse(qj) ;
    }
    console.log(qj) ;
    //查询语句
    var querySql = '' ;
    var querySql2 = '' ;
    querySql  += 'select ' ;

    //console.log(Object.keys(qj.columns))
    var queryCols = Object.keys(qj.columns) ;
    //queryCols.splice(0,1)  ;
    queryCols = queryCols.filter(filteredArray)
    console.log("==============================================================") ;
    console.log(queryCols)  ;

    for(i in queryCols){
         console.log(i);
        querySql += (i != queryCols.length - 1) ? '`'+queryCols[i]+'` ,' : '`'+queryCols[i]+'` ' ;
    }
    querySql += ' from `'+ params +'` ' ;
    querySql += 'order by ' ;
    querySql += '`'+ sortColumn +'` ' +' DESC ' ;
    querySql2 = querySql ;
    querySql += (qj.limit == undefined) ? ' ' : ' limit '+ qj.limit + ' '  ;
    querySql += (qj.offset == undefined) ? ' ' : 'offset ' + qj.offset + ' '  ;
    console.log(querySql) ;

    //查询字段列数组
    var clmArr = Object.keys(qj.columns) ;
    var relationAlias = clmArr.join(",") ;
    var relationTypes = [] ;

    for(var i = 0 ; i < clmArr.length ; i++){
        var colType = qj.columns[clmArr[i]].type ;
        relationTypes.push(colType) ;
        //relationTypes.push(Object.keys(qj.columns)) ;
    }
    //relationTypes[0] = "Boolean" ;

    //对象转map
    var paramsArgMap = objToStrMap(qj) ;
    for(var i = 0 ; i < externalCols.length ; i++){
        if(paramsArgMap.has(externalCols[i])){
            paramsArgMap.delete(externalCols[i]) ;
        }

    }
    console.log(paramsArgMap);

    relationTypes = relationTypes.join(",")  ;
    var returnObj = {
        "@type" : "table" ,
        rows : [] ,
        "userdata":{
            "relationAlias":"",
            "relationTypes":"",
            "sys.count": 0
        }
    }
    returnObj.userdata.relationAlias = relationAlias ;
    returnObj.userdata.relationTypes = relationTypes ;


    pool.getConnection(function(err,connection){
        if(err) {
            res.send({}) ;
            throw err ;
        }
        //connection.query('select * from `pub_school` ; select `school_name` from `pub_school`',function(err,result){
        //connection.query(querySql ,function(err,result){
        connection.query(''+querySql+';'+querySql2+'' ,function(err,result){
            if(err) {
                res.send({}) ;
                throw err ;
            }
            console.log(result)
            var rlt = JSON.stringify(result[0]) ;
            rlt = JSON.parse(rlt) ;
            var totalRlt = JSON.stringify(result[1]) ;
            totalRlt = JSON.parse(totalRlt) ;
            console.log(rlt) ;
            returnObj.rows = rlt ;

            returnObj.userdata["sys.count"] = totalRlt.length ;
            console.log("***************************************************") ;
            //console.log(returnObj) ;
            //resJson = toJson(rlt, req.query) ;
            res.send(returnObj)  ;
            //res.send({res : rlt })  ;
        })
    })

});

if (!module.parent) {
    app.listen(3001);
    console.log('Express started on port 3001');
}


/*
 switch(queryAction){
 case "select" :
 querySql = 'select * from `users`' ;
 break ;
 case "add" :
 querySql = "INSERT INTO `users` SET `username`='Lucy' , `age` = 88 ,`sex`='female' " ;
 break ;
 case "update" :
 querySql = 'UPDATE `users` SET `username`="ligangtadie",`age` = 444 ,`sex`="female" WHERE `id`=11' ;
 break ;
 case "delete" :
 querySql = 'DELETE FROM `users` WHERE `id`=12' ;
 break ;

 }
 */























































































