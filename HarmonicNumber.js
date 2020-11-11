const prompt = require('prompt-sync')();

let number = prompt("Enter a number : ");
let harmonicNumber = 0;
for(let i = 1; i <= number; i++){
    
    harmonicNumber = harmonicNumber + (1/i);
}

console.log(harmonicNumber);