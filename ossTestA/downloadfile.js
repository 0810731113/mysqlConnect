var co = require('co') ;
var OSS = require('ali-oss') ;

var client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAICNs9WNKWyN90',
    accessKeySecret: '9MYgT69NghzGPsat9Q9dPgxwTW0BJR',
    bucket: 'eeclass-kejian-store-1'
});

//下载文件
//co(function* () {
//    var result = yield client.get('upload-file-libo', 'mypic');
//    console.log(result);
//}).catch(function (err) {
//    console.log(err);
//});

//获取访问权限
co(function* () {
    var result = yield client.getBucketACL('eeclass-kejian-store-1');
    console.log(result);
}).catch(function (err) {
    console.log(err);
});













































