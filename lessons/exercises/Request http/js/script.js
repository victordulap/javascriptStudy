'use strict';

// var onError = function (message) {
//    console.error(message);
// }

// var onSuccess = function (data) {
//    var user = data;
//    var title = document.getElementById('title');
//    title.textContent = user.joke;
// }

// let xhr = new XMLHttpRequest();

// console.log(xhr);
// console.log(xhr.readyState);



// xhr.responseType = 'json';
// xhr.addEventListener('load', () => {
//    let error;
//    switch (xhr.status) {
//       case 200:
//          onSuccess(xhr.response);
//          break;
//       case 400:
//          error = "Request contains some mistakes";
//          break;
//       case 401:
//          error = "User was not authorized";
//          break;
//       case 404:
//          error = "Page was not found";
//          break;
//       default:
//          error = "Response status: " + xhr.status + ", " + xhr.statusText;
//          break;
//    }

//    if (error) {
//       onError(error);
//    }
//    // console.log('load: ' + xhr.readyState);
//    // console.log(xhr.status + ' ' + xhr.statusText);

//    // try {

//    //    console.log(JSON.parse(xhr.responseText));
//    // } catch (err) {
//    //    console.log(err.message);
//    // }
//    console.log(xhr.response);
// })

// xhr.addEventListener('error', () => {
//    onError('some error')
// })

// xhr.timeout = 1000; //ms
// xhr.addEventListener('timeout', () => {
//    onError(`Timeout: ${xhr.timeout}`)
// })

// console.log(xhr);

// let btnJoke = document.querySelector('.btn-joke');
// btnJoke.addEventListener('click', () => {
//    xhr.open('GET', "https://v2.jokeapi.dev/joke/Any?type=single");
//    xhr.send();
// })

// universal function to make requests
(() => {
   window.load = (url, onSuccess, onError) => {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
         if (xhr.status == 200) {
            onSuccess(xhr.response);
         } else {
            onError(`Request status: ${xhr.status}, ${xhr.statusText}`);
         }
      });

      xhr.addEventListener('timeout', () => {
         onError(`Timeout: ${xhr.timeout}`);
      });
      xhr.timeout = 10000; // 10s

      xhr.open('GET', url);
      xhr.send();
   }
})();

(() => {
   var onError = function (message) {
      console.error(message);
   }

   var onSuccess = function (data) {
      var user = data;
      var title = document.getElementById('title');
      title.textContent = user.joke;
   }

   let btnJoke = document.querySelector('.btn-joke');
   btnJoke.addEventListener('click', () => {
      window.load('https://v2.jokeapi.dev/joke/Any?type=single', onSuccess, onError);
   })
})();

