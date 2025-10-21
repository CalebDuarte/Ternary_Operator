// Write a js to check age
const prompt = require('prompt-sync')();

let age = parseInt(prompt( "How old are you? "));

let result = age < 13 ? "Child" : 
             age < 20 ? "Teen":
             age < 60 ? "Adult": "Senior";
console.log("You are a " + result);

