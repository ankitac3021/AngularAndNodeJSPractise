var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");


var server=http.createServer(function(request,response){

    console.log(request.url);
    
    if(request.url==="/"){
        response.writeHead(200,{'Content-Type':'text/html'});
        var myReadStream=fs.createReadStream(__dirname+"/index.html");
        myReadStream.pipe(response);
    }
    else if(request.url==="/login"){
        response.writeHead(200,{'Content-Type':'text/html'});
       
        var body="";
        request.on('data',function(data){
                body+=data;
        })
        
        request.on('end',function(){
           var post=qs.parse(body);
            console.log(post.uname);
            if(post.uname===post.pwd)
            response.write("<h1>Login Successfull</h1>");
        else
            response.write("<h1>Login Failed!!!</h1>");
        response.end();
        })    
        
        
    }
}).listen(3000);
console.log("Application Up at port 3000");