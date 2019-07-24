var fs=require("fs");
var bodyParser=require("body-parser");
var express=require("express");
var app=express();
app.use(bodyParser.json());

app.set("view engine","ejs");
app.get("/",function(request,response){
    response.render("index");
});

//need to pick data from here
app.get("/comments",function(request,response){
    var contents=fs.readFileSync("review.json");
    var obj=JSON.parse(contents);
    response.send(JSON.stringify(obj.items));
});

app.get("/items/:itemNo",function(request,response){
    var contents=fs.readFileSync("review.json");
        var obj=JSON.parse(contents);
    var item=request.params.itemNo;
    for(var i=0;i<obj.items.length;i++)
    {
        if(item===obj.items[i]["itemCode"])
            response.send(JSON.stringify(obj.items[i]));
    }  
});

app.post("/items",function(request,response){
    var data=fs.readFileSync("review.json");
    var z=JSON.parse(data);
    var item=request.body;
    z.items.push(item);

    fs.writeFileSync("review.json",JSON.stringify(z.items));
    response.send(JSON.stringify(item));
})

app.listen(3000);
console.log("Application listening on port 3000");