// write a js to check the day using (1-7)
const prompt = require('prompt-sync')();
let nameDay = "";
day = parseInt(prompt("What is the day of the week? "));
if( day === 1){
    nameDay="sunday";
}
else if( day ===2)
{
    nameDay="monday";
}
else if( day === 3)
{
    nameDay="tuesday";
}
else if( day === 4)
{
    nameDay="wednesday";
}
else if( day === 5)
{
    nameDay="thursday";
}
else if( day === 6)
{
    nameDay="Friday";
}
else if( day=== 7)
{
    nameDay="saturday";
}
else{
    nameDay="a invalid day";
}
console.log("It is " + nameDay)