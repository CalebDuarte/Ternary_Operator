// write js to detect seasons
const prompt = require('prompt-sync')();
temp = parseInt(prompt(" What number month are you in? "));
if(temp === 12 && temp === 1 && temp=== 2)
{
    console.log(" Winter ");
}
else if(temp === 3 || temp === 4 || temp === 5)
{
    console.log("Spring");
}
else if(temp === 6 || temp === 7 || temp === 8)
{
    console.log("Summer");
}
else if(temp === 9 || temp === 10 || temp === 11)
{
    console.log("Fall");
}
else
{
    console.log("Invalid");
}