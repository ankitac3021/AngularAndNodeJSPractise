var fs=require("fs");

//Readable Stream - allows node js to read data from a stream
var myReadStream=fs.createReadStream(__dirname+"/readMe.txt","utf8");

//Writable Stream allows node js to write data to a stream
var myWriteStream=fs.createWriteStream(__dirname+"/writeMe.txt");

myReadStream.on('data',function(chunk){
    console.log("=============================")
    console.log("New Chunck Received");
    console.log("=========================");
    myWriteStream.write(chunk);
    // console.log(chunk);
});

