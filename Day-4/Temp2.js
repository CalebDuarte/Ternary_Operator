// Write js to calssify temperature
const prompt = require('prompt-sync')();
nameTemp = "";

temp = parseInt(prompt("What is the temperature outside? "));

if( temp > 30)
{
    nameTemp = "Hot"
}
else if( temp >= 20 && temp <= 30)
{
    nameTemp = "Warm"
}
else if( temp >= 19  &&  temp >= 10)
{
    nameTemp = "Cool"
}
else(temp < 10)
{
    nameTemp = "Cold"
}
console.log("The temperature is " + nameTemp)