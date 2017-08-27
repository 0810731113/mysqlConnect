var co = require('co') ;
var OSS = require('ali-oss') ;

var client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAICNs9WNKWyN90',
    accessKeySecret: '9MYgT69NghzGPsat9Q9dPgxwTW0BJR',
    bucket: 'eeclass-kejian-store-1'
});


co(function* () {
    client.useBucket('eeclass-kejian-store-1');
    var local_file_path = 'JavaScript语言精粹.pdf'
    var result = yield client.put('object-key-js', local_file_path);
    console.log(result);
}).catch(function (err) {
    console.log(err);
});