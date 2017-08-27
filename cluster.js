


var numCPUs = require("os").cpus().length;
console.log(numCPUs);

var http = require("http");
var port = parseInt(process.argv[2]);
console.log(port);

http.createServer(function(request, response) {
    console.log("Request for:  " + request.url);
    response.writeHead(200);
    response.end("hello world\n");
}).listen(port || 3001);