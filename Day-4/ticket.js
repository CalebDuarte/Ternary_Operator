// Write a js to calculate ticket price
const prompt = require('prompt-sync')();


let ticket = parseInt(prompt("How old are you?"));
let result = ticket >= 12? "$15" : "$8";
console.log("Your ticket is " + result);
