console.log("Hello EveryOne,Welcome to the world of Node JS!!")

/*global.*/setTimeout(function() {
    console.log("2 seconds have passed");
}, 3000);

console.log("Test!!");


var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log(time+"seconds have passed from setInterval Demo");
    if(time>10)
        clearInterval(timer);
},2000);

console.log("good Bye");