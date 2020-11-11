const prompt = require('prompt-sync')();

let number = prompt("Enter a number : ");
let count = 0;
let i = 0;
while(Math.pow(2,i) <= 256 && count <= number){
    console.log(Math.pow(2,i));
    i++;
    count ++;
}