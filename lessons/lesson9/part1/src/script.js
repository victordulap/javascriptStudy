let animal = {
   eats: true,
   walk: () => {
      console.log('i can walk');
   }
};

let rabbit = {
   foodPreference: 'carrots',
   jumps: true
};


// mostenire 1 (inheritance)
rabbit.__proto__ = animal;

// mostenire 2
let monkey = {
   foodPreference: 'banana',
   // inheritance:
   __proto__: animal
};

console.log('rabbit');
console.log(rabbit.eats);
rabbit.walk();

console.log('\nmonkey');
console.log(monkey.eats);
monkey.__proto__.walk();

let user = {
   name: "Dorin",
   surname: "Ceban",
   age: 18,

   // nu putem 2 paramatri
   // set fullName(name, surname) {
   set fullName(name) {
      [this.name, this.surname] = name.split(" ");
      // this.name = name;
      // this.surname = surname;
   },

   get fullName() {
      return `${this.name} ${this.surname}`;
   }
}

console.log(`user: ${user.fullName}, ${user.age}`);
user.fullName = "vasile jora";
console.log(`user after change: ${user.fullName}, ${user.age}`);