var express = require('express');
var mysql = require("mysql") ;
var bodyParser = require('body-parser') ;
var session = require('express-session');

var dateutils = require('date-utils');

var app = module.exports = express()  ;

// var d = new Date() ;
// console.log(d.toFormat('YYYY-MM-DD'));

var pool = mysql.createPool({
    host : 'www.eeclasscloud.com' ,
    user : 'root' ,
    password : '123456' ,
    //database : 'yk_r oom',
    database : 'eeclasscloud',
    multipleStatements: true

});


app.get('/',function(req,res){
    //res.sendfile(__dirname + '/makecourseware.html');
    res.sendfile(__dirname + '/addCourses.html');
})

app.use(bodyParser.urlencoded({
    extended : false
}))

app.use(express.static(__dirname )) ;

app.post('/basicinfo' ,function(req,res){
    console.log(req.body);

    var querySql5 = 'insert into `courses` (`course_id`,`teacher_id` ,`cname` , `hot_key` ,`preview_url` , `pu_or_pr` , `co_or_sp` ,`summary`, `time` ) values ' ;
    querySql5 += '(? , ? , ? , ? ,? , ? , ? , ? , ? )' ;

    var paramArr5 = Object.values(req.body);
    paramArr5.push(new Date());
    console.log(paramArr5) ;
    pool.getConnection(function(err,connection){
        if(err){
            throw err ;
            res.send({addstatus : 'fail'})
        }

        connection.query(querySql5 , paramArr5 ,function(err , result){
            if(err){
                throw err ;
                res.send({addstatus : 'fail'})
            }
            var resultStr = JSON.stringify(result) ;
            var returnJson = JSON.parse(resultStr);
            console.log(returnJson) ;
            if(returnJson.affectedRows >0){
                res.send({addstatus : 'seccess'}) ;
            }else {
                res.send({addstatus : 'fail'})
            }

        })
    })

    // res.send({addstatus : 'fail'}) ;
});



if(!module.parent){
    app.listen(3001) ;
    console.log('Express started on port 3001');
}






























































