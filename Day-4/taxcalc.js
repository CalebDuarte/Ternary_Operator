// write js to calculate income tax
const prompt = require('prompt-sync')();

income = parseInt(prompt("What is your annual income? "));
if(income >= 0 && income <= 10000)
{
    console.log("You receive a 0% (No tax) ");
}
else if(income >= 10001 && income <=30000)
{
    console.log(" You receive a 10% tax ");
}
else if(income >= 30001 && income <= 60000)
{
    console.log(" You receive a 20% tax ");
}
else if(income >= 60001 && income <= 100000)
{
    console.log(" You receive a 30% tax ");
}
else if(income >= 100001)
{
    console.log(" You receive a 40% tax ");
}