// var mycounter=require("./FirstCustomModule");

// console.log(mycounter([10,20,30,40,50]));

var mymod=require("./FirstCustomModule");

console.log(mymod.counter(["hello","hi","bye"]));

console.log(mymod.adder(10,mymod.pi));