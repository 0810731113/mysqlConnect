var express = require('express')
var mysql = require('mysql') ;
var bodyParser =require('body-parser') ;
var session = require('express-session');

var sendMail = require('./mail');

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
//发送地址: 192.168.3.112:3001/mailform
app.get('/mailform',function(req,res){
    console.log(req.query);
    var reqCon = req.query ;
    var mailContent = "" ;
    var mailTitle = "我是一个客户" ;
    if((req.query.tel == '' || req.query.tel == null) && (req.query.mail =='' || req.query.mail == null) ){
        res.send({message : "填写信息无效，请检查"}) ;
        return ;
    }
    if(reqCon.username){
        mailContent += "我是: " + reqCon.username ;
    }
    if(reqCon.tel){
        mailContent += " 我的电话是:  " + reqCon.tel ;
    }
    if(reqCon.mail){
        mailContent += " 我的邮箱是:  " + reqCon.mail ;
    }
    if(reqCon.content){
        mailContent += " 我想咨询: " + reqCon.content ;
    }
    if(reqCon.title){
        mailTitle = reqCon.title ;
    }

    //sendMail('446713973@qq.com','aaaa', 'Hi aaaaaaaa');
    sendMail('895842425@qq.com',mailTitle, mailContent);
    res.send({message : "我们会及时回访你，感谢你的关注！"});

})

//sendMail('lb@ouruv.cn','aaaa', 'Hi aaaaaaaa');
// sendMail('895842425@qq.com','aaaa', 'Hi aaaaaaaa');

if (!module.parent) {
   app.listen(3001);
   console.log('Express started on port 3001');
}



























































































































































