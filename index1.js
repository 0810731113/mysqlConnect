var express = require('express')
var mysql = require('mysql') ;
var bodyParser =require('body-parser') ;
var session = require('express-session');

var app = module.exports = express() ;

app.use(express.static(__dirname + '/demo')) ;

app.use(session({
    resave : false ,
    saveUninitialized : false ,
    secret : 'shhh,very secret'
}));

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



app.get('/',function(req,res){
    res.sendfile(__dirname + '/demo' +'/index.html' );
})

//不适合用该传输协议，没有返回值，还是适合ajax渲染
app.post('/:formSubmit',function(req,res){
    console.log(req.body) ;
    if(req.body.uname == "libo" && req.body.pwd == "123"){
        //req.session.regenerate(function(){
        //    req.session.user = {
        //        name : req.body.uname ,
        //        pwd : req.body.pwd
        //    }
        //    res.redirect('/')
        //});
        if(req.session.views){
            ++req.session.views ;

        }else{
            req.session.views = 1 ;

        }
    }
    res.redirect('/') ;
})



app.get('/testSession',function(req,res){



})

app.get('/auth/:id/:password',function(req,res){
    console.log("Welcome!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;

    res.render({id : req.params.id , name : req.params.password}) ;
    //res.end(JSON.stringify({id : req.params.id , name : req.params.password})) ;

});

var pool = mysql.createPool({
    host : 'localhost' ,
    user : 'root' ,
    password : '0810731113' ,
    database : 'node'

});

function querySql(sql){
    var rlt = {} ;
    pool.getConnection(function(err,connection){
        if(err) throw err ;

        connection.query(sql,function(err,result){
            if(err) throw err ;
            rlt = JSON.stringify(result) ;
            console.log(JSON.stringify(result));
        })
    })
    return rlt ;
}

app.get('/btnEvent',function(req,res){
    console.log("Welcome!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;

    console.log(req.query) ;
    var resJson = {} ;
    //var queryAction = req.query.action ;

    //var sql = 'SELECT * FROM `user` WHERE `uid`='+connection.escape('"123";//--');
    //var myResult = querySql(sql) ;
    var querySql = 'select * from `users` where `id` = 14 ' ;
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
    pool.getConnection(function(err,connection){
        if(err) {
            res.send({}) ;
            throw err ;
        }
        var sql = 'select * from `users` where `id` = 14 ' ;
        connection.query(querySql,function(err,result){
            if(err) {
                res.send({}) ;
                throw err ;
            }
            rlt = JSON.stringify(result) ;
            rlt = JSON.parse(rlt) ;
            console.log(rlt) ;
            console.log("***************************************************")
            console.log(rlt[0]) ;
            resJson = toJson(rlt, req.query) ;
            //res.send(resJson)  ;
            res.send({res : rlt })  ;
        })
    })

    //console.log(Object.getOwnPropertyNames(myResult[0]))
    //console.log(Object.getOwnPropertyNames(myResult[1]))
    //console.log(JSON.stringify(myResult))
    //console.log(Object.getOwnPropertyNames(new String(myResult[0])))
    //res.render({id : req.params.id , name : req.params.password}) ;
    //res.end(JSON.stringify({id : req.params.id , name : req.params.password})) ;
    //res.send({id : '123456' , name : 'libo'}) ;
    //res.send(myResult) ;
    //res.send(myResult) ;

});

if (!module.parent) {
    app.listen(3001);
    console.log('Express started on port 3001');
}


























































































