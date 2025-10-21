// write js to build a traffic light system
const prompt = require('prompt-sync')();

light = prompt(" What color is the light? ");

if(light ==="red")
{
    console.log(" STOP! ");
}
else if(light === "yellow")
{
    console.log(" Slow down ");
}
else if(light === "green")
{
    console.log(" Go ");
}
else
{
    console.log("Invalid");
}