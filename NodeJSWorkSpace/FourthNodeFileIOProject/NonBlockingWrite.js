var fs=require("fs");

//Non Blocking Mode
fs.readFile("readMe.txt","utf8",function(err,data){
    fs.writeFile("writeMe.txt",data,function(){
        console.log("File Created!!");
    });
    
});

console.log("Good Bye");
console.log("Not sure about files reading writing status!!");