var http = require('http');
var fs=require("fs");
var qs=require("querystring");
var url=require("url");
var server=http.createServer(function (req, res) {
   if(req.url==="/"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myreadstream=fs.createReadStream(__dirname+"/demo.html");
    myreadstream.pipe(res);
   }
   else if(req.url==="/operation"){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      var body="";
      req.on("data",function(data){
         body+=data;
      })
      req.on("end",function(){
           post=qs.parse(body);
         if(post.submit=="add")
         res.write("RESULT:" +(parseInt(post.numb1)+parseInt(post.numb2)));
         else if(post.submit=="sub")
         res.write("RESULT:" +(post.numb1-post.numb2));
         else if(post.submit=="mul")
         res.write("RESULT:" +(post.numb1*post.numb2));
         else if(post.submit=="div")
         res.write("RESULT:" +(post.numb1/post.numb2));
         res.end();
      })
   }
  });
  server.listen(3000,"127.0.0.1");
  console.log("APP IS LISTENING NOW AT PORT 3000"); 


