var fs=require("fs");

fs.unlinkSync("writeMe.txt")
console.log("file deleted");

//blocked directory creation
fs.rmdirSync("dummy");
console.log("dummy Removed");
fs.mkdirSync("mydir");
console.log("my dir folder created");

//Non Blocking directory creation and Removal
fs.mkdir("mydemo",function(){
    console.log("Directory mydemo created");
})

console.log("Don't know abt directory creating status");


