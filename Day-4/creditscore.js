//write js to calculate credit score
const prompt = require('prompt-sync')();
creditScore = parseInt(prompt(" What is your credit score? "));
if( creditScore >=800 && creditScore >= 850)
{
    console.log(" Exceptional - Best rates available ")
}
else if( creditScore >= 740 && creditScore <= 799)
{
    console.log(" Very Good - Better than average ");
}
else if( creditScore >= 670 && creditScore <= 739)
{
    console.log(" Good - Near or above average ");
}
else if( creditScore >= 580 && creditScore <= 669)
{
    console.log(" Fair - Below average ");
}
else if( creditScore >= 300 && creditScore <= 669)
{
    console.log(" Poor - Credit may be denied ");
}
else
{
    console.log(" INVALID INPUT");
}