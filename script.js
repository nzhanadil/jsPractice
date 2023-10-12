//Fortune teller
const numberOfChildren = 2;
const partnersName = 'Jenifer';
const geoLocation = 'LA';
const jobTitle = 'Developer';
const fortuneOutput = 'You will be a '+jobTitle+' in '+geoLocation+', and married to '+partnersName+' with '+numberOfChildren+' kids.';
console.log(fortuneOutput);

// Age Calculator
const currentYear = 2023;
const birthYear = 1990;
const currentAge = currentYear - birthYear;
const ageCalcOutput = 'They are either '+currentAge+' or '+(currentAge-1);
console.log(ageCalcOutput);

// Temperature Converter
// C to F
const tempInCelcius = Math.floor(Math.random()*100);
const tempInFahrenheit = tempInCelcius*9/5+32;
const outputCtoF = tempInCelcius + '\u00B0C is ' + tempInFahrenheit + '\u00B0F';
console.log(outputCtoF);

//F to C
const F = Math.floor(Math.random()*100);
const C = (F-32) *5/9;
const outputFtoC = tempInFahrenheit + '\u00B0F is ' + C.toFixed(2) + '\u00B0C';
console.log(outputFtoC);