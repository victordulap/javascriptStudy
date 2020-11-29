// var people = ["John", "Sam", "Alice", "Joe"];

// document.getElementById('people').innerHTML = people.toString();
// document.getElementById('peopleJoin').innerHTML = people.join(" / ");

// people.push("Vasea");

// var numbers = [1, 2, 3, 4];

// // add array in one element
// people.push(numbers);
// console.log(people);

// // add array element by element
// people.push(...numbers);
// console.log(people);

// //removes last
// people.pop();
// console.log(people);

// // remove first
// people.shift();
// console.log(people);

// //add at begin
// people.unshift(...numbers);
// console.log(people);

// console.log("Current length is " + people.length);
// people.length = 6;
// console.log(people);

// delete people[3];

// console.log(people);

// people.splice(3, 1);
// console.log(people);

// people.splice(3, 2);
// console.log(people);

// //replace
// people.splice(5, 200, "jora", "joe");
// console.log(people);


// // return a new array from a specific position and length from index to index
// var people2 = people.slice(1, 100);
// console.log(people2);

// var n1 = [1, 3];
// var n2 = [2, 4];

// console.log(n1.concat(n2));

//    A
//    |
//    |
// lesson 5

// lesson 6 
//    |
//    |
//    V

var people = ["John", "Sam", "Alice", "Joe"];


people.forEach(function (item, index, array) {
   console.log(item);
});

[111, 222, 333, 444].forEach((item, index, array) => console.log(item));

[111, 222, 333, 444].forEach((item, index) => {
   item *= 2;
   console.log(`${index}. ${item}`);
   // console.log(`array: ${array}`);
});

function showMyName(name) {
   console.log(name);
}

people.forEach((item) => showMyName(item));

console.log(`index of Joe: ${people.indexOf("Joe")}`);
console.log(`index of qwerty: ${people.indexOf("qwerty")}`);

console.log(`${people.includes('Joe')}`);

var users = [
   { id: 1, name: "Marry" },
   { id: 2, name: "Vanessa" },
   { id: 3, name: "Ina" },
]

let findUser = users.find(item => item.id == 2);
console.log(`findUser: ${findUser.id}. ${findUser.name}`);
let findUserIndex = users.findIndex(item => item.id == 2);
console.log(`findUserIndex: ${findUserIndex}`);

let filteredUsers = users.filter(item => item.id < 3);
// console.log(filteredUsers);
filteredUsers.forEach(item => console.log(`${item.id}. ${item.name}`));

let lengthOfNames = users.map(item => item.name.length);
lengthOfNames.forEach(item => { console.log(item); });

var numbers = [1, 123, 13, -1, 13124, 121241, -5];
function compareNumbers(number1, number2) {
   if (number1 > number2) return 1;
   else if (number1 == number2) return 0;
   else return -1;
}
numbers.sort(compareNumbers);
console.log(numbers);

numbers.reverse();
console.log(numbers);


numbers.sort(function (x, y) {
   // putem folosi asa in loc de a compara n1 cu n2 de 3 ori
   return x - y;
})
console.log(numbers);

var numbersInt = `1, 123, 13, -1, 13124, 121241, -5`;
//                         transform str to int V
// map returneaza un nou array dupa conditia noastra
var arrInt = numbersInt.split(", ").map(item => +item);
//                            shorter than V is ^
// var arrInt = numbersInt.split(", ").map(item => parseInt(item)); 
console.log(arrInt);

// str to char array
let longString = "QWAWDJAWKKLZX";
console.log(longString.split(''));

// calculate sum of array
var nums = [1,3,5];
//  initial: { buffer  = 0, current = 1 }
// cum lucreaza
// buffer  0 1 4 9
// current 1 3 5
var sum = nums.reduce((buffer, currentItem) => buffer + currentItem, 0);
console.log(sum);