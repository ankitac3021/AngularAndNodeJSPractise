var fs=require('fs');

//Blocking Read
var fileContents=fs.readFileSync("readMe.txt","utf8");

fs.writeFileSync("writeMe.txt",fileContents);
console.log("File Created!!");
console.log("Waiting for my turn to get executed");
console.log("Good Bye");

