var events=require("events");

var myEmitter=new events.EventEmitter();
//attaching action with event
myEmitter.on("someEvent",function(msg){
    console.log(msg);
});

console.log("Somevent will going to take place very soon");

//raising event
myEmitter.emit("someEvent","The event named someEvent was emiited");