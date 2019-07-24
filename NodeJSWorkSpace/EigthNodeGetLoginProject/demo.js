var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");


var server=http.createServer(function(request,response){

    console.log(url.parse(request.url).pathname);

    
    if(request.url==="/"){
        response.writeHead(200,{'Content-Type':'text/html'});
        var myReadStream=fs.createReadStream(__dirname+"/index.html");
        myReadStream.pipe(response);
    }
    else if(url.parse(request.url).pathname==="/login"){
        response.writeHead(200,{'Content-Type':'text/html'});

        
        var query=url.parse(request.url,true).query;
        console.log(query);
        if(query.uname===query.pwd)
            response.write("<h1>Login Successfull</h1>");
        else
            response.write("<h1>Login Failed</h1>");
        response.end();
        
        
    }
}).listen(3000);
console.log("Application Up at port 3000");