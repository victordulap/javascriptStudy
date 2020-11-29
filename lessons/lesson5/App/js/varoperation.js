/*
    Операции с переменными
=========================================
Математические операции
JavaScript поддерживает все базовые математические операции:
*/
var dublLine = "=============================*/";
var snglLine = "/* \n-----------------------------*/";
var underline = "\n-----------------------------*/";
var comntLine = "/*---------------------------*/";
/*  Сложение:
---------------------------------------*/
var add = "\n/* Сложение: \n";
var x = 10;
var y = x + 50;

console.log(add + dublLine);
console.log("var x = 10; \nvar y = x + 50;");
console.log("console.log(y); // " + y);

/*  Вычитание:
---------------------------------------*/
var subtract = "\n/* Вычитание: \n";
var x = 100;
var y = x - 50;

console.log(subtract + dublLine);
console.log("var x = 100;\nvar y = x - 50;");
console.log("console.log(y); // " + y);

/*  Умножение:
---------------------------------------*/
var multiply = "\n/* Умножение: \n";
var x = 4;
var y = 5;
var z = x * y;

console.log(multiply + dublLine);
console.log("var x = 4;\nvar y = 5;\nvar z = x * y;");
console.log("console.log(z); // " + z);

/*  Деление:
---------------------------------------*/
var divide = "\n/* Деление: \n";
var x = 40;
var y = 5;
var z = x / y;

console.log(divide + dublLine);
console.log("var x = 40;\nvar y = 5;\nvar z = x / y;");
console.log("console.log(z); // " + z);

/*  Деление по модулю (оператор %) 
    возвращает остаток от деления:
---------------------------------------*/
console.log("/*\n Деление по модулю\n (оператор %) возвращает\n остаток от деления: \n" + dublLine);
var x = 40;
var y = 7;
var z = x % y;

console.log("var x = 40;\nvar y = 7;\nvar z = x % y;");

/* 
    Результатом будет 5, так как наибольшее целое число, 
    которое меньше или равно 40 и при этом делится 
    на 7 равно 35, а 40 - 35 = 5. 
*/

console.log("console.log(z); // " + z); // 5

/*  Инкремент:
---------------------------------------*/
var incremt = "\n/* Инкремент:\n";
var x = 5;
x++; // x = 6

console.log(incremt + dublLine);
console.log("var x = 5;\nx++;");
console.log("console.log(x); // " + x);

/*
Оператор инкремента ++ увеличивает переменную на единицу. 
Существует префиксный инкремент, который сначала увеличивает 
переменную на единицу, а затем возвращает ее значение. 
И есть постфиксный инкремент, который сначала возвращает 
значение переменной, а затем увеличивает его на единицу:
---------------------------------------*/

// префиксный инкремент
var name = "\n/* префиксный инкремент";
console.log(name + underline);

var x = 5;
var z = ++x;
console.log("var x = 5; \nvar z = ++x;")
console.log("console.log(x); // " + x);
// 6
console.log("console.log(z); // " + z); // 6

//Ex.1
var ex = "/* Ex.";
console.log(ex + 1 + underline);

var a = 8;
var b = ++a;
console.log("var a = 8; \nvar b = ++a;");
console.log("console.log(a); // " + a); // 9
console.log("console.log(b); // " + b); // 9
     
// постфиксный инкремент
var name = "\n/* постфиксный инкремент";
console.log(name + underline);

var a = 5;
var b = a++;
console.log("var a = 5; \nvar b = a++;");
console.log("console.log(a); // " + a); // 6
console.log("console.log(b); // " + b); // 5

//Ex.1
var ex = "/* Ex.";
console.log(ex + 1 + underline);

var a = 7
var b = a++;
console.log("var a = 7; \nvar b = a++;");
console.log("console.log(a); // " + a); // 8
console.log("console.log(b); // " + b); // 7

/*  Постфиксный инкремент аналогичен операции:
---------------------------------------*/
var title;
title = "\n/* Аналогичен операции:";
a = a + 1; // a++

console.log(title + underline);
console.log("a = a + 1; // a++");

/*  Декремент уменьшает значение переменной на единицу. 
Также есть префиксный и постфиксный декремент:
---------------------------------------*/
var decremt = "\n/* Декремент:\n";
console.log(decremt + dublLine);
// префиксный декремент
var prefix = "/* префиксный декремент";
console.log(prefix + underline);

var x = 5;
var z = --x;
console.log("var x = 5; \nvar z = --x;");
console.log("console.log(x); // " + x); // 4
console.log("console.log(z); // " + z); // 4
     
// постфиксный декремент
var postfix = "\n/* постфиксный декремент";
console.log(postfix + underline);

var a = 5;
var b = a--;
console.log("var a = 5; \nvar b = a--;");
console.log("console.log(a); // " + a); // 4
console.log("console.log(b); // " + b); // 5

/*  Как и принято в математике, все операции выполняются слева направо и различаются по приоритетам: сначала операции инкремента и декремента, затем выполняются умножение и деление, а потом сложение и вычитание. Чтобы изменить стандартный ход выполнения операций, часть выражений можно поместить в скобки:
---------------------------------------*/
var mathOperation = "\n/* Математические операции:\n";
console.log(mathOperation + dublLine);

var x = 10;
var y = 5 + (6 - 2) * --x;
console.log("var x = 10; \nvar y = 5 + (6 - 2) * --x;");
console.log("console.log(y); // " + y); //41