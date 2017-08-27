var express = require('express');
var mysql = require("mysql") ;
var bodyParser = require('body-parser') ;
var session = require('express-session');
var fs = require("fs");
var multiparty = require('multiparty');
//var multer = require("multer");

//var dateutils = require('date-utils');




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
    res.sendfile(__dirname + '/index.html');
})

app.use(bodyParser.urlencoded({
    extended : false
}))

app.use(express.static(__dirname )) ;

app.all('/imgUpload' , function(req , res){
    console.log("我进来了!!!");

    var form = new multiparty.Form();
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = "uploads";
    //设置单文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;

    form.parse(req, function (err, fields, files) {
        console.log(fields);
        console.log(files);
        //files = files.file ;
        // var des_file = __dirname + "/upload/" + files[0].originalFilename;
        // fs.readFile( files[0].path, function (err, data) {
        //     fs.writeFile(des_file, data, function (err) {
        //         if( err ){
        //             console.log( err );
        //         }else{
        //             response = {
        //                 message:'File uploaded successfully',
        //                 filename:files[0].originalFilename
        //             };
        //         }
        //         // console.log( response );
        //         // res.end( JSON.stringify( response ) );
        //     });
        // });
    });
    res.send({"jsonrpc" : "2.0", "result" : null, "id" : "id"});
});

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






























































