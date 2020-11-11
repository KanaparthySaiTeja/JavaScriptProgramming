const prompt = require('prompt-sync')();
var year = prompt('Enter the year YYYY format: ');
if((year % 4 == 0) && (year % 100 != 0))
    console.log("Leap Year");
else if(year % 400 == 0)
    console.log("Leap Year");
else
    console.log("Not a Leap Year");