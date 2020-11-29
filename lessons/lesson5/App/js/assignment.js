/*  Операции присваивания
======================================*/
var dublLine = "\n================================*/";
var snglLine = 
"\n--------------------------------*/";
/*====================================*/
/*  Сложение 
======================================*/

var addAssign = "\n/* Сложение";
console.log(addAssign + dublLine);

var a = 23;
a += 5; // аналогично a = a + 5
console.log("var a = 23;\na += 5; // аналогично a = a + 5");
console.log("console.log(a); // результат = " + a); // 28

// Ex.1
var ex = "\n/* Ex.";
console.log(ex + 1 + snglLine);

var b = 12;
b += 13;
console.log("var b = 12; \nb += 13;");
console.log("console.log(b); // результат = " + b); // 25

/*  Вычитание
======================================*/
var subtract = "\n/* Вычитание";
console.log(subtract + dublLine);

var a = 28;
a -= 10; // аналогично a = a - 10
console.log("var a = 28; \na -= 10; // аналогично a = a - 10");
console.log("console.log(a); // результат = " + a); // 18

/*  Умножение
======================================*/
var multiply = "\n/* Умножение";
console.log(multiply + dublLine);

var x = 20;
x *= 2; // аналогично x = x * 2
console.log("var x = 20; \nx *= 2; // аналогично x = x * 2");
console.log("console.log(x); // результат = " + x); // 40

/*  Деление
======================================*/
var divide = "\n/* Деление";
console.log(divide + dublLine);

var x = 40;
x /= 4; // аналогично x = x / 4
console.log("var x = 40; \nx /= 4; // аналогично x = x / 4");
console.log("console.log(x); // результат = " + x); // 10

/*  Получение остатка
======================================*/
var remainder = "\n/* Получение остатка";
console.log(remainder + dublLine);

var x = 10;
x %= 3; // аналогично x = x % 3
console.log("var x = 10; \nx %= 3; // аналогично x = x % 3");
console.log("console.log(x); // результат = " + x); // 1
