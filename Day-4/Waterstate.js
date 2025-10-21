// write js to check water state
const prompt = require('prompt-sync')();

waterTemp = parseInt(prompt("What is the temperature of your water? "));
if( waterTemp <= 0)
{
    console.log(" Ice (Solid) ");
}
else if( waterTemp >= 0 && waterTemp <= 99)
{
    console.log(" Water (Liquid) ");
}
else if( waterTemp >= 100)
{
    console.log(" Steam (Gas) ");
}