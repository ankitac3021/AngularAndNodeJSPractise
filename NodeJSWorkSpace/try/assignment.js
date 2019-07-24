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

    else if(request.url==="/display"){
        response.writeHead(200,{'Content-Type':'application/json'});
         var contents=fs.readFileSync("employee.json");
         var obj=JSON.parse(contents);
         //response.write(JSON.stringify(obj.employees[1]["name"]));
         response.write(JSON.stringify(obj.employees));
         response.end();     
    }
}).listen(3000);
console.log("Application Up at port 3000");


