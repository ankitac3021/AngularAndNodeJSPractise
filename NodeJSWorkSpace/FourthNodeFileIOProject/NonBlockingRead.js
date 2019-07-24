var fs=require("fs");

//Non Blocking Mode
fs.readFile("readMe.txt","utf8",function(err,data){
    console.log(data);
});

console.log("Good Bye");
console.log("File Busy in getting read");