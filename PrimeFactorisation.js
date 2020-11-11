const prompt = require('prompt-sync')();
let number = prompt("Enter a number: ");

console.log("Prime Factors of "+ number + " Are: ");
for(let i = 2; i <= number; i++){
    while(number % i == 0){
        console.log (i);
        number = number / i;
    }
}