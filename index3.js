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


function queryData(req,tablename,sortClm , sortType){

    var tableName = tablename ;
    var sortColumn = sortClm ;
    var qj = req.query.params ;
    if(typeof qj != "object" ){
        qj = JSON.parse(qj) ;
    }
    console.log(qj) ;
    //查询语句
    var querySql = '' ;
    var querySql2 = '' ;
    querySql  += 'select ' ;
    var queryCols = Object.keys(qj.columns) ;
    queryCols = queryCols.filter(filteredArray)
    console.log("==============================================================") ;
    console.log(queryCols)  ;

    for(i in queryCols){
        console.log(i);
        querySql += (i != queryCols.length - 1) ? '`'+queryCols[i]+'` ,' : '`'+queryCols[i]+'` ' ;
    }
    querySql += ' from `'+ tableName +'` ' ;
    querySql += 'order by ' ;
    querySql += '`'+ sortColumn +'` ' + sortType ;
    querySql2 = querySql ;
    querySql += (qj.limit == undefined) ? ' ' : ' limit '+ qj.limit + ' '  ;
    querySql += (qj.offset == undefined) ? ' ' : 'offset ' + qj.offset + ' '  ;
    console.log(querySql) ;

    var promise = new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err) {
                //res.send({}) ;
                throw err ;
            }
            connection.query(''+querySql+';'+querySql2+'' ,function(err,result){
                if(err) {
                    //res.send({}) ;
                    throw err ;
                }
                console.log(result)
                resolve(result) ;

            })
        })
    })

    return promise ;
}

//多表查询
function queryMultiTable(req,sql){

    var promise = new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                throw err ;
            }
            connection.query(sql,function(err,result){
                if(err){
                   throw err ;
                }
                console.log(result)
                resolve(result) ;
            })

        });
    })
    return promise ;

}

function formatQueryData(result,req,res){

    var qj = req.query.params ;
    if(typeof qj != "object" ){
        qj = JSON.parse(qj) ;
    }
    //查询字段列数组
    var clmArr = Object.keys(qj.columns) ;
    var relationAlias = clmArr.join(",") ;
    var relationTypes = [] ;

    for(var i = 0 ; i < clmArr.length ; i++){
        var colType = qj.columns[clmArr[i]].type ;
        relationTypes.push(colType) ;
        //relationTypes.push(Object.keys(qj.columns)) ;
    }

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

    var rlt = JSON.stringify(result[0]) ;
    rlt = JSON.parse(rlt) ;
    var totalRlt = JSON.stringify(result[1]) ;
    totalRlt = JSON.parse(totalRlt) ;
    console.log(rlt) ;
    returnObj.rows = rlt ;

    returnObj.userdata["sys.count"] = totalRlt.length ;
    console.log("***************************************************") ;
    res.send(returnObj)  ;
    //return returnObj ;
}


app.get('/btnEvent',function(req,res){
    console.log("Welcome!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;

    //query()

    //queryData(req,"ykr_item","add_date" , "DESC").then(function(result){
    //    formatQueryData(result,req,res) ;
    //});
});

if (!module.parent) {
    app.listen(3001);
    console.log('Express started on port 3001');
}
























































































