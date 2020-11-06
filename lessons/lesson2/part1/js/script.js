console.log(document.getElementById("btn1"));
console.log(document.getElementsByClassName("btn"));
console.log(document.getElementsByTagName("button"));
console.log(document.querySelector("button"));
console.log(document.querySelectorAll("button"));
console.log(document.querySelectorAll(".btn"));

var elements = document.querySelectorAll(".test p");

for (let i = 0; i < elements.length; i++) {
   elements[i].style.backgroundColor = "#aaaaaa";
}

function myFunction() {
   console.log("Event works fine");
}

var buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', function () {
      console.log(this.innerText);
   })
}

var clicker = document.getElementsByClassName("btn");
for (let i = 0; i < clicker.length; i++) {
   clicker[i].addEventListener('click', function () {
      this.innerText = parseInt(this.innerText) + 1;
   })
}
