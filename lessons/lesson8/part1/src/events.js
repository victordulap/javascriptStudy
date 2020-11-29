"use strict";

function changeImage() {
   var image = document.getElementById("imgToChange");
   var imageSrc = "" + image.src;
   if (imageSrc.endsWith('js.png')) {
      image.src = "./img/angular.png";
   } else {
      image.src = "./img/js.png";
   }
}

var btn2 = document.getElementById('changeImgBtn2');
// nu, pentru ca se executa functia, dar nu se atribue
// btn2.addEventListener('click', changeImage());
btn2.addEventListener("click", changeImage);
setTimeout(() => btn2.removeEventListener('click', changeImage), 1500);

// cu functie nedeclarata, nu lucreaza remove
// btn2.addEventListener("click", () => {alert('1')});
// setTimeout(() => btn2.removeEventListener('click', changeImage), 1500);


// propagations of events
let divElements = document.querySelectorAll('div');
let buttonPropagation = document.getElementById('propagation');
let clickedElement = null;

function clickHandler(event) {
   console.log(event);

   if(clickedElement) {
      clickedElement.classList.remove('clicked');
   }
   clickedElement = event.currentTarget;
   clickedElement.classList.add('clicked');

   // debugger;
}

buttonPropagation.addEventListener('click', clickHandler);