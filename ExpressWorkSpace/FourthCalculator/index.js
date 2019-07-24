var express=require("express");
var app=express();

app.set("view engine","ejs");
app.get("/",function(request,response){
    response.render("index");
});

//need to pick data from here
app.get("/operation",function(request,response){
    var data=request.query;
    console.log(data);
    var result;
    if(data.submit==="add")
        result=parseInt(data.numb1)+parseInt(data.numb2);
    else if(data.submit==="sub")
         result=parseInt(data.numb1)-parseInt(data.numb2);
    else if(data.submit==="mul")
         result=parseInt(data.numb1)*parseInt(data.numb2);
    else if(data.submit==="div")
        result=parseInt(data.numb1)/parseInt(data.numb2);

    response.render("result",{res:result});
});

app.listen(3000);
console.log("Application listening on port 3000");