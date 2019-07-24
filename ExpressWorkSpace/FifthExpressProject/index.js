var express=require("express");
var app=express();

app.set("view engine","pug");
app.get("/",function(request,response){
    response.render("index");
});

//need to pick data from here
app.get("/login",function(request,response){
    var data=request.query;
    console.log(data);
    var message;
    if(data.uname===data.pwd)
        message="Login Successfull!!";
    else
    {
        message="Login Failed!!!";
    }

    response.render("result",{user:data.uname,msg:message});
});

app.listen(3000);
console.log("Application listening on port 3000");