/*
   1. Запросите у пользователя его имя и выведите в ответ:
   «Привет, его имя!».
*/

// var name = prompt("What\'s your name?");
// // cu , el asteapta inca un parametru
// alert("Hello " + name);

/*
   2. Запросите у пользователя год его рождения, посчитайте,
   сколько ему лет и выведите результат. Текущий год укажите
   в коде как константу.
*/

// const todaysYear = 2020;
// var userBrithYear = prompt("What\'s your birth year?");
// alert("You are " + (todaysYear - userBrithYear) + " year old.");

/*
   3. Запросите у пользователя длину стороны квадрата
   и выведите периметр такого квадрата.
*/

// var squareSide = prompt("Enter square side");
// alert("Perimeter of square with side of " 
//    + squareSide + " is: " + (squareSide*4));

/*
   4. Запросите у пользователя радиус окружности и выведите
   площадь такой окружности.
*/

// var circleRadius = prompt("Enter circle radius");
// alert("Area of circle with radius of "
//    + circleRadius + " is: " + (3.14 * (circleRadius ** 2)));

/*
   5. Запросите у пользователя расстояние в км между двумя
   городами и за сколько часов он хочет добраться.
   Посчитайте скорость, с которой необходимо двигаться, чтобы
   успеть вовремя.
*/

// var distance = prompt("Enter distance from pos1 to pos2 in km");
// var time = prompt("Enter wanted time from pos1 to pos2 in hours");

// var speed = distance / time;
// alert("Your speed needs to be at least " + speed + " km/h");

/*
   6. Реализуйте конвертор валют. Пользователь вводит доллары,
   программа переводит в евро. Курс валюты храните в константе.
*/

// const excangeRateUSDToEuro = 0.85;
// var userUSD = prompt("Enter sum of USD to change in Euro");
// alert("You will recieve: " + (userUSD * excangeRateUSDToEuro) + " euros");

/*
   7. Пользователь указывает объем флешки в Гб.
   Программа должна посчитать сколько файлов размером в 820 Мб
   помещается на флешку
*/

// var flashDriveCapacity = prompt("Enter flash drive capacity");
// alert("You can stock " + Math.trunc(flashDriveCapacity / 0.82) 
//    + " files with size of 820mb");

/*
   8. Пользователь вводит сумму денег в кошельке и цену одной
   шоколадки. Программа выводит сколько шоколадок может
   купить пользователь и сколько сдачи у него останется.
*/

// var sumOfMoney = prompt("Enter your sum of money");
// var priceOfChocolate = prompt("Enter the price of a chocolate");

// var maxChocolates = parseInt(sumOfMoney / priceOfChocolate);
// var remainingMoney = sumOfMoney - 
//    (maxChocolates * priceOfChocolate);
// alert("You can buy " + maxChocolates + " chocolates and " 
// + remainingMoney + "$ will remain to you");

/*
   9. Запросите у пользователя трехзначное число и выведите
   его задом наперед. Для решения задачи вам понадобится
   оператор % (остаток от деления).
*/

// while (true) {
//    var number = prompt("Enter a 3 digit number");
//    if (number.length == 3 && number == parseInt(number))
//       break;
//    else
//       alert("number invalid, try again");
// }
// var result = "";
// for (let i = 0, len = number.length; i < len; i++) {
//    let nr = number % 10;
//    console.log("nr: " + nr);
//    number = parseInt(number / 10);
//    console.log("number: " + number);
//    result += nr;
//    console.log("result: " + result);
// }

// alert("Reverser: " + result);

/*
   10. Запросите у пользователя целое число и выведите в ответ,
   четное число или нет. В задании используйте логические
   операторы. В задании не надо использовать if или switch.
*/

// while (true) {
//    var number = prompt("Enter a integer");
//    if (number == parseInt(number))
//       break;
//    else
//       alert("number is not integer, try again");
// }

// //1
// // var isEven = number % 2 == 0 ? alert(number + " is even") : alert(number + " is odd");
// //2
// alert(number % 2 == 0 ? number + " is even" : number + " is odd");