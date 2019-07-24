var http=require("http");
var fs=require("fs");


var server=http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});

    var myReadStream=fs.createReadStream(__dirname+"/sample.txt");
    myReadStream.pipe(response);
    // response.end("Hello Everyone, Response Coming directly from server created using node!!!");
});

server.listen(3000,"127.0.0.1");
console.log("App is listening now at port 3000");
