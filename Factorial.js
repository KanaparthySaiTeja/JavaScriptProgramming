  
const prompt = require('prompt-sync')();

let number = prompt("Enter a number : ");

if(number == 0){
    console.log("Factorial : 1");
}else{
    let factorial = 1;
    for(let i = 1;i<=number;i++){
        factorial = factorial * i;
    }
    console.log("Factorial : "+factorial);
}