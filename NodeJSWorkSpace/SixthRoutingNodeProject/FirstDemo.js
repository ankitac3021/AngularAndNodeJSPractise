var http=require("http");
var fs=require("fs");


var server=http.createServer(function(request,response){

    if(request.url==="/home" || request.url==="/"){
    response.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+"/index.html");
    myReadStream.pipe(response);
    }
else if(request.url==="/contact"){
    response.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+"/contact.html");
    myReadStream.pipe(response);
}
else if(request.url==="/api/data"){
    var person={firtname:"Sujata",lastname:"Batra"};
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(person));
}
else{
    response.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+"/notfound.html").pipe(response);

}
    
});

server.listen(3000,"127.0.0.1");
console.log("App is listening now at port 3000");
