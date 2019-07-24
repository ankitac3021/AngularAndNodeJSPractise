var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

//need to pick data from here
app.get("/login",function(req,res){
    var data=req.query;
    console.log(data);
    if(data.uname===data.pwd)
        res.sendFile(__dirname+"/success.html");
    else
        res.sendFile(__dirname+"/failure.html");
});

app.listen(3000);
console.log("Application listening on port 3000");