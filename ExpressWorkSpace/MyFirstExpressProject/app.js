var express=require("express");
var app=express();
app.get("/",function(request,response){
    response.send("Welcome to the world of express js");
});

app.get("/contact",function(request,response){
    response.send("You Requested for Contact page!!!");
});

app.post("/contact",function(request,response){
    response.send("This is post method of Contact Page!!");
});

app.get("/home",function(request,response){
    response.sendFile(__dirname+"/index.html");
});

app.listen(3000);
console.log("Application listening at port 3000");