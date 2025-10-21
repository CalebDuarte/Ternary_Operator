// write a js to check if it is the weekend
const prompt = require('prompt-sync')();


let Day = prompt("What day is it  ?");
let result = (Day ==="Saturday" || Day==="Sunday") ? "Weekend" : "Weekday";
console.log("It is " + result)