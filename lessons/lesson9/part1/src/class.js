// syntax
// class Student {
//    constructor(prop1, prop2){
//       this.prop1 = prop1;
//       this.prop1 = prop2;
//    }
//    method1(){}
//    method2(){}
//    ...
//    methodn(){}
// }

class User {
   constructor(name) {
      this.name = name;
   }
   sayHi() {
      console.log("Hello from " + this.namee);
   }

   set setName(value) {
      if (value.length > 3) {
         console.log('Name is too short');
         return;
      }
      this.name = value;
   }

   get setName() {
      return this.name;
   }
}

let user2 = new User("Ion");
user2.sayHi();
console.log(`typeof (User): ${typeof (User)}`);
console.log(`typeof (user2): ${typeof (user2)}`);
console.log(`User.name: ${User.name}`);
console.log(`User.prototype.sayHi(): ${User.prototype.sayHi()}`);
console.log(`User.prototype.namee: ${User.prototype.namee}`);
user2.setName = "12";
console.log(`user2.name: ${user2.name}`);

// function Constuctor
function Person(name, surname) {
   this.name = name;
   this.surname = surname;
   this.sayHi = function () {
      console.log(`Hello, i'm ${this.name} ${this.surname}`)
   }
}

var person = new Person('vasea', 'jora');
person.sayHi();

// dynamic class 
function genarateDynamicClass(str) {
   return class {
      greetWithEveryone() {
         console.log("Greetings to everyone, " + str);
      };
   };
}

let Greet = genarateDynamicClass('hello');
var greet = new Greet();
greet.greetWithEveryone();


// exotic way to define props
Object.defineProperties(User.prototype, {
   name: {
      get() {
         return this.name;
      },
      set(value) {
         this.name = value;
      }
   }
})

var date = new Date();

console.log(date.getDate());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

class Clock { // h:m:s
   //          {} -> primim un obj
   constructor({ template }) {
      this.template = template;
   }

   render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = "0" + hours;
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;
      let seconds = date.getSeconds();
      if (seconds < 10) seconds = "0" + seconds;

      let result = this.template.replace('h', hours)
         .replace('m', minutes)
         .replace('s', seconds);

      console.log(result);
   }

   start() {
      this.render();
      // apeleaza la infinit
      this.timerId = setInterval(() => this.render(), 1000);
   }

   stop() {
      clearInterval(this.timerId);
   }
}

// use Clock
let clock = new Clock({ template: 'h:m:s' });

// debugger;
// for (let i = 5; i >= 1; i--) {
//    setTimeout(() => {
//       console.log('black friday in ' + i);
//    }, 1000);
// }

class Animal {
   constructor(name) {
      this.name = name;
      this.speed = 5;
   }
   walk() {
      console.log(`${this.name} is walking with ${this.speed}`);
   }
   sleep() {
      console.log(`${this.name} is sleeping`);
   }
}

let cat = new Animal('tom');

class Mouse extends Animal {
   constructor(name) {
      // din clasa de baza, consructor
      super(name);
   }

   hide() {
      console.log(`Mouse ${this.name} is hidden`);
   }
}

let jerry = new Mouse('Jerry');