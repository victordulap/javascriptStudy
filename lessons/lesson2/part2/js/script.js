var numberButtons = document.getElementsByClassName("calculator__number");
var operationButtons = document.getElementsByClassName("calculator__operation")
var rezult = document.getElementById("rezult-field");
var equalButton = document.getElementById("calculator__equal")
var clearButton = document.getElementById("calculator__clear")

var operation;
var operationIndex;
var number1;

// numbers
for (let i = 0; i < numberButtons.length; i++) {
   numberButtons[i].addEventListener("click", function () {
      rezult.value += this.innerText;
   })
}

// operations
for (let i = 0; i < operationButtons.length; i++) {
   operationButtons[i].addEventListener("click", function () {
      operation = this.innerText;
      operationButtons[i].style.backgroundColor = "#aaaaaa";
      operationIndex = i;
      number1 = parseInt(rezult.value);
      rezult.value = "";
   })
}

// equal
equalButton.addEventListener("click", function () {
   if (rezult.value != "") {
      console.log(operation);
      console.log(number1);
      console.log(parseInt(rezult.value));
      switch (operation) {
         case '+':
            rezult.value = parseInt(rezult.value) + number1;
            break;
         case '-':
            rezult.value = number1 - parseInt(rezult.value);
            break;
         case '/':
            rezult.value = number1 / parseInt(rezult.value);
            break;
         case '*':
            rezult.value = number1 * parseInt(rezult.value);
            break;
      }

      operationButtons[operationIndex].style.backgroundColor = "#454545";
   }
})

clearButton.addEventListener("click", function () {
   rezult.value = "";
   number1 = undefined;
   operation = undefined;
   operationIndex = undefined;
})