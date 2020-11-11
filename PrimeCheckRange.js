const prompt = require('prompt-sync')();

let num1 = prompt("Enter first number : ");
let num2 = prompt("Enter last number : ");
for(let j = num1; j <= num2; j++){
    for(let i = 2 ; i <= j/2; i++){
        if(j % i == 0){
            console.log("Number: " + j + " not a Prime");
            break;
        }
    }
}
console.log(" Other numbers are Prime ");