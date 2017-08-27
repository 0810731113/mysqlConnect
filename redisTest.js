var redis = require("redis")

var Promise = require("bluebird");


var client = redis.createClient({password : "0810731113"})


client.keys("*",function(err,result){

    if(err) throw err ;
    for(let aa in result){
        console.log(result[aa]) ;
    }
})



//client.on("error",function(err){
//    console.log("Error: " + err)
//
//})

//client.set("firstStr" , "I am a request from node.js" , redis.print);

//client.hset("myhash_1" , "hashkey1" , "hashvalue1",redis.print);

//client.hset(["myhash_1","hashkey2","hashvalue2"],redis.print) ;

//client.hkeys("myhash_1",function(err,replies){
//    console.log( replies.length )
//    //console.log( replies )
//    for( var aa in replies){
//        console.log(aa)
//        console.log(replies[aa])
//    }
//
//})

//var args = [ 'myzset', 1, 'one', 2, 'two', 3, 'three', 99, 'ninety-nine' ];
//client.zadd(args, function (err, response) {
//    if (err) throw err;
//    console.log('added '+response+' items.');
//
//    // -Infinity and +Infinity also work
//    var args1 = [ 'myzset', '+inf', '-inf' ];
//    client.zrevrangebyscore(args1, function (err, response) {
//        if (err) throw err;
//        console.log('example1', response);
//        // write your code here
//    });
//
//    var max = 3, min = 1, offset = 1, count = 2;
//    var args2 = [ 'myzset', max, min, 'WITHSCORES', 'LIMIT', offset, count ];
//    client.zrevrangebyscore(args2, function (err, response) {
//        if (err) throw err;
//        console.log('example2', response);
//        // write your code here
//    });
//});


//var redis = require("redis");
//var sub = redis.createClient({password : "0810731113"}),
//    pub = redis.createClient({password : "0810731113"});
//var msg_count = 0;
//
//sub.on("subscribe", function (channel, count) {
//    pub.publish("a nice channel", "I am sending a message.");
//    pub.publish("a nice channel", "I am sending a second message.");
//    pub.publish("a nice channel", "I am sending my last message.");
//});
//
//sub.on("message", function (channel, message) {
//    console.log("sub channel " + channel + ": " + message);
//    msg_count += 1;
//    if (msg_count === 3) {
//        console.log("接收完毕")
//        sub.unsubscribe();
//        sub.quit();
//        pub.quit();
//    }
//});
//
//sub.subscribe("a nice channel");




























































