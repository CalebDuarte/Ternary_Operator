// Write a js script to classify age groups
const prompt = require('prompt-sync')();

age = parseInt(prompt("How old are you? "));
if(age >=0 && age <= 12)
{
    console.log("Child");
}
else if(age <=19 && age >= 13)
{
    console.log("Teenager");
}
else if(age >=20 && age <= 59)
{
    console.log("Adult");
}
else if(age >= 60){
    console.log("Senior");
}
else{
    console.log("Invalid input");
}