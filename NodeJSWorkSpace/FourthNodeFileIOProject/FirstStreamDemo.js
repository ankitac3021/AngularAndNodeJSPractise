var fs=require("fs");

//Readable Stream - allows node js to read data from a stream
var myReadStream=fs.createReadStream(__dirname+"/readMe.txt","utf8");

myReadStream.on('data',function(chunk){
    console.log("=============================")
    console.log("New Chunck Received");
    console.log("=========================");
    // console.log(chunk);
});

