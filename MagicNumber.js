let num = Math.floor(Math.random()*100)+1;
console.log(num)

let num1 = 100;
let num2 = 1;
let num3 = 0;

while(num3 != num){
    num3 = (num1 + num2) /2
    if(num < num3)
      num1 = num;
    else
      num2 = num;
}

console.log(num3);