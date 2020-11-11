const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");

for(let i = 2; i<=number/2;i++ ){
    if(number % i == 0){
        console.log(number+" not a prime number")
        return;
    }
}
console.log(number+" is a prime number")