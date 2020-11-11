let num = 7569
let thousand,hundred,ten,unit;
unit = num % 10;
 ten= num % 100;
 hundred = num % 1000;
 thousand = num % 100000;

 console.log("Thousands = %d, Hundreds = %d, Tens = %d , Units = %d\n",thousand,hundred,ten,unit);