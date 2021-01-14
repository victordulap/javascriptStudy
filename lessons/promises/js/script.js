// function doFirst(second) {
//    console.log("First function");
//    ////
//    second();
// }

// function payTaxes() {
//    console.log('I payed taxes');
// }

// doFirst(payTaxes);




// callback hell
// step1(function(value1) {
//    step2(value1, function(value2) {
//       step3(value2, function(value3) {
//         // ...
//       })
//    })
// });




// // node js, execute in teminal, ex:
// // PS path node filename
// // D:/js node testScript
// const fs = require('fs');

// fs.readFile('test.txt', 'utf8', (err, data) => {
//    if(err) {
//       return console.log(err + ' appeared.');
//    }
//    console.log(data);
// });

// // executes before showing file dat
// console.log('end');





function getAuthor() {
   // emulate a server response delay

   // async code
   setTimeout(() => {
      return { name: 'Julius', age: 12 };
   }, 1000);

   // sync code
   // return { name: 'Julius', age: 12 };
}

// var author = getAuthor();
// var authorName = author.name;
// // error, because of the async code delay of response
// console.log(`authorName : ${authorName}`);



// promise
// var authorNamePromise = getAuthor().then((author) => {
//    if (author === null) {
//       console.log('null author');
//    }
//    console.log(author.name);
//    return author.name;
// });
// console.log(`authorNamePromise : ${authorNamePromise}`);


// // promise example
// let promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//  //resolve('result')
//       reject(new Error('Server rerturned timeout'));
//    }, 1000);
// });

// promise.then((result) => {
//    alert('Fulllfilled ' + result);
// }, (error) => {
//    alert('Rejected: ' + error)
// });

// // promise example shorter
// let promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('result')
//       reject(new Error('timeout'));
//    }, 1000);
// });

// promise.then(
//    result => alert('Fulllfilled ' + result),
//    error => alert('Rejected: ' + error)
// );




function httpGet(url) {
   return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function () {
         if (this.status == 200) {
            resolve(this.response);
         } else {
            var error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
         }
      };

      xhr.onerror = function () {
         reject(new Error('network error'));
      };

      xhr.send();
   })
}

// httpGet("https://v2.jokeapi.dev/joke/Any?type=single").then(
//    response => {
//       console.log(`Fullfilled: ${response}`)
//       return response;
//    },
//    error => console.log(`Rejected: ${error}`)
// ).then(
//    joke => {
//       console.log(JSON.parse(joke));
//       // console.log(joke);
//       return httpGet(`https://api.github.com/users/${JSON.parse(joke).category}`)
//    }
// ).then(githubUser => {
//    console.log(githubUser);
//    githubUser = JSON.parse(githubUser);

//    let image = new Image();
//    image.src = githubUser.avatar_url;
//    image.classList.add('styled');
//    document.body.appendChild(image);

//    setTimeout(() => {
//       image.remove();
//    }, 3000);
// });


// Promise.all([httpGet("https://v2.jokeapi.dev/joke/Any?type=single"),
// httpGet(`https://api.github.com/users/programming`),
// httpGet('https://avatars0.githubusercontent.com/u/190141?v=4')
// ]).then(
//    result => { console.log(result); },
//    error => { console.log(error); }
// )


// exercitiu practic: o functie care se executa cu delay si o functie care se executa dupa ea
// function delay(time) {
//    return new Promise((resolve, reject) => {
//       if (time > 0) {
//          setTimeout(() => {
//             let response = `executed in ${time} ms.`;
//             resolve(response);
//          }, time);
//       } else {
//          reject(new Error(`${time} is invalid time.`));
//       }
//    })
// }

// function random() {
//    console.log('nothing to say...');
// }

// delay(-1000).then(
//    response => {console.log(`Success: ${response}`);},
//    error => {console.log(`Error: ${error.message}`);}
// ).then(
//    execute => {random()}
// );


// USEFULL EXAMPLE LINK
// https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies




// async
async function f() {
   return 5;
}

// f().then(response => console.log(response));

async function wait1() {
   setTimeout(() => {
      return 1000;
   }, 1000);
}

wait1().then(response => console.log(response)).then(
   () => {console.log(f());}
)