
// 12 * 10^4
var x = 12e4;
console.log(x);

console.log();
console.log(undefined + ": " + typeof (undefined));
console.log(((1 - 2) + ": " + typeof (1 - 2)));
console.log((1 + + "asd") + ": " +typeof (1 + + "asd"));

function convertToCelsius(fahrenheit) {
   return (fahrenheit - 32) * 5 / 9;
}

var str = "string";

for (let i = 0; i < str.length; i++) {
   const element = str[i];
   console.log(element);
}