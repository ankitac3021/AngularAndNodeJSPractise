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
    response.send(JSON.stringify(obj));
});

app.get("/items/:itemNo",function(request,response){
    var contents=fs.readFileSync("review.json");
        var obj=JSON.parse(contents);
    var item=request.params.itemNo;
    for(var i=0;i<obj.length;i++)
    {
        if(item===obj[i]["itemCode"])
            response.send(JSON.stringify(obj[i]));
    }  
});

/*app.post("/update/:itemNo",function(request,response){
    var data=fs.readFileSync("review.json");
    var c=fs.readFileSync("update.json");
    var z=JSON.parse(data);
    var x=JSON.parse(c);
    var item=request.body;
    var element=request.params.itemNo;;
    for(var i=0;i<z.length;i++)
    {
        if(element===z[i]["itemCode"])
        {
        x.push(item);
        }
        else
        {
            x.push(z[i]);
            fs.writeFileSync("update.json",JSON.stringify(x));
        }
    }  
    response.send(JSON.stringify(x));
});*/

/* app.get("/delete/:itemNo",function(request,response){
    var contents=fs.readFileSync("review.json");
    var c=fs.readFileSync("new.json");
    var obj=JSON.parse(contents);
    var ob=JSON.parse(c);
  // var arr;
   //var counter;
   //counter=0;
    var item=request.params.itemNo;
for(var i=0;i<obj.length;i++)
{
    if(item===obj[i]["itemCode"])
        ;
    else
    {
        ob.push(obj[i]);
        fs.writeFileSync("new.json",JSON.stringify(ob));
        //arr[counter++]=obj[i];
    }
}
fs.writeFileSync("review.json",arr);
//response.send(JSON.stringify(ob));
}); */

app.post("/items",function(request,response){
    var data=fs.readFileSync("review.json");
    var z=JSON.parse(data);
    var item=request.body;
    z.push(item);

    fs.writeFileSync("review.json",JSON.stringify(z));
    response.send(JSON.stringify(item));
});




app.listen(3000);
console.log("Application listening on port 3000");