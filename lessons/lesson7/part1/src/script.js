// "use strict";

var wizard = {};
// ==
var obj = new Object();

console.log(wizard);
console.log(obj);

// document.getElementById("indo").innerText = obj;

var magician = {
   name: "Ion",
   surname: "Ceban",
   age: 19,
   gender: "M",
   itemsInBag: ["notebbook", "phone", "sun glasses"],
   speak: function () { console.log("Wassup!"); }
};

console.log({ magician });

console.log(magician);


console.log("magician.age: " + magician.age);


console.log('magician["age"]: ' + magician["age"]);



console.log("magician.asd: " + magician.asd);


console.log('magician["ads"]: ' + magician["asd"]);



var __ = '<Some info>';
console.log('qwerty ' + __);

var magicianFriends = {

   friend1: "Vasea",
   friend2: "Eugen",
   friend3: "Andrey"
}

for (let i = 1; i <= 3; i++) {
   let magicianFriendName = magicianFriends['friend' + i];
   console.log(magicianFriendName);
}

function doMagic(name) {
   console.log(`I'll do some magic on ${name}!!!`);
}

magician.doMagic = doMagic;
// error because we call the function, not assign it!
// magician.doMagic = doMagic();

// 1
// function numberPlusFive() {
//    console.log(this.age + 5);
// }

// magician.getAgeAfterFiveYears = numberPlusFive;

// 2
magician.getAgeAfter5Years = function () {
   console.log(this.age + 5);
}

magician.friends = magicianFriends;
console.log(magician);

magician.bestFriend = {
   name: 'John',
   level: 5,
   greet: function() { console.log(`Hello, im ${this.name}`)},
   // greet2: function() {console.log(`Hello, my best friend is ${this.__proto__.name}`)}
}