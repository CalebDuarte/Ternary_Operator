// write a js code to test teperature status
const prompt = require('prompt-sync')();

let temperature = parseInt(prompt("What is the temperature?"));

let result = temperature > 30? "Hot" : "Normal";
console.log("The temperature is" + result)