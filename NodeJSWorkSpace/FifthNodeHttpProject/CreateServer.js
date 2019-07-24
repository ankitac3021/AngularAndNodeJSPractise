var http=require("http");

var server=http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello Everyone, Response Coming directly from server created using node!!!");
    response.end("Good Bye!!");
});

server.listen(3000,"127.0.0.1");
console.log("App is listening now at port 3000");
