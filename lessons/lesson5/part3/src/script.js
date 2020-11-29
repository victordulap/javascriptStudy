var people = ["John", "Sam", "Alice", "Joe"];

document.getElementById('people').innerHTML = people.toString();
document.getElementById('peopleJoin').innerHTML = people.join(" / ");

people.push("Vasea");

var numbers = [1, 2, 3, 4];

// add array in one element
people.push(numbers);
console.log(people);

// add array element by element
people.push(...numbers);
console.log(people);

//removes last
people.pop();
console.log(people);

// remove first
people.shift();
console.log(people);

//add at begin
people.unshift(...numbers);
console.log(people);

console.log("Current length is " + people.length);
people.length = 6;
console.log(people);

delete people[3];

console.log(people);

people.splice(3, 1);
console.log(people);

people.splice(3, 2);
console.log(people);

//replace
people.splice(5, 200, "jora", "jora");
console.log(people);


// return a new array from a specific position and length from index to index
var people2 = people.slice(1,100);
console.log(people2);

var n1 = [1, 3];
var n2 = [2,4];

console.log(n1.concat(n2));