// Write a js code to calculate a discount
const prompt = require('prompt-sync')();

let Purchase = parseInt(prompt("What is your purchase amount?"));

let result = Purchase >= 100? "10% discount" : "0% discount";
console.log("You recive a " + result );