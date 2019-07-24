var fs=require('fs');

//Blocking Read
var fileContents=fs.readFileSync("readMe.txt","utf8");
console.log(fileContents);

console.log("Waiting for my turn to get executed");
console.log("Good Bye");

