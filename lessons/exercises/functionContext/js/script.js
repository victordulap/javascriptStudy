// 'use strict';

var sayMyName = function () {
   console.log(`My name is ${this.name}`);
}

var wizard = {
   name: 'Oz',
   sayMyName: sayMyName,
   greet: function() {
      console.log(this === window);
      console.log(this);
      console.log(`Hi, i'm ${this.name}, learn better bro`);
   },
   greetStrict: function () {
      'use strict';
      console.log(this === window);
      console.log(this);
      console.log(`Hi, i'm ${this.name}, learn better bro`);
   },
   greetArrow: () => {
      console.log(`Hi, i'm ${this.name}, learn better bro`);
   }
}


wizard.greet();
wizard.greetStrict();
wizard.greetArrow();
wizard.sayMyName();
