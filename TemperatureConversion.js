function celiusToFahren(celsius) 
{
  var celTemp = celsius;
  var celToFahr = celTemp * 9 / 5 + 32;
  var temp = celTemp+'\xB0C is ' + celToFahr + ' \xB0F.';
    console.log(temp);
}

function fahrenToCelsius(fahrenheit) 
{
  var fahrenTemp = fahrenheit;
  var fahrenToCel = (fahrenTemp - 32) * 5 / 9;
  var temp = fahrenTemp+'\xB0F is ' + fahrenToCel + '\xB0C.';
    console.log(temp);
} 
celiusToFahren(190);
fahrenToCelsius(600);