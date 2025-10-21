// write js to detect blood pressure
const prompt = require('prompt-sync')();
systolic = parseInt(prompt(" What is your systolic blood pressure? "));
diastolic = parseInt(prompt(" What is your disatolic blood pressure? "));
if(systolic < 120 && diastolic < 80)
{
    console.log(" Normal ");
}
else if(systolic <= 120 || systolic >= 129 && diastolic < 80)
{
    console.log(" Elevated ");
}
else if(systolic <= 130 || systolic >= 139 || diastolic <= 80 || diastolic >= 89)
{
    console.log(" High BP Stage 1 ");
}
else if( systolic <= 140 || systolic >= 180 || diastolic <= 90 || diastolic >= 120)
{
    console.log(" High BP Stage 2 ");
}
else if(systolic > 180 || diastolic > 120)
{
    console.log(" Hypertensive Crisis");
}