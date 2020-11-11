const prompt = require('prompt-sync')();

console.log("1.Feet to Inch\n2.Inch To Feet\n3.Feet To Meter\n4.Meter To Feet");
let choice = prompt("Enter a choice: ");
choice = parseInt(choice);
switch(choice){
    case 1:
        let number = prompt("Enter the number in Feet : ");
        console.log(number * 12+" inches");
        break;
    case 2:
        let number1 = prompt("Enter the number in Inch : ");
        console.log(number1 / 12+" feets");
        break;
    case 3:
        let number2 = prompt("Enter the number in Feet : ");
        console.log(number2 * 0.305+" meters");
        break;
    case 4:
        let number3 = prompt("Enter the number in Meter : ");
        console.log(number3 * 1 / 0.305+" feets");
        break;
    default:
        console.log("Incorrect Input");
}