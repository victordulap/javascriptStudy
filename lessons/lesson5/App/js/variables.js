/* JS Variables
------------------------------------------------------------------
 Переменные и константы
------------------------------------------------------------------
Для хранения данных в программе используются переменные. Переменные предназначены для хранения каких-нибудь временных данных или таких данных, которые в процессе работы могут менять свое значение. Для создания переменных применяются ключевые слова var и let. Например, объявим переменную myIncome:
*/

var myIncome;
// другой вариант
let myIncome2;
/*
Каждая переменная имеет имя. Имя представляет собой произвольный набор алфавитно-цифровых символов, знака подчеркивания (_) или знака доллара ($), причем названия не должны начинаться с цифровых символов. То есть мы можем использовать в названии буквы, цифры, подчеркивание. Однако все остальные символы запрещены.

Правильные названия переменных:
*/
var $commision;
var someVariable;
var product_Store;
var income2;
var myIncome_from_deposit;
/* 
Следующие названия являются некорректными и не могут использоваться:

222lol
@someVariable
my%percent

Также нельзя давать переменным такие имена, которые совпадают с  зарезервированными ключевыми словами. Например, следующее название будет некорректным, так как 'for' - ключевое слово в JavaScript:

var for;

//- Список зарезервированных слов в JavaScript:

abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, inteface, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with
------------------------------------------------------------------*/
var myIncome;
var MyIncome;

// Через запятую можно определить сразу несколько переменных:

var myIncome, procent, sum;
let a, b, c;

// С помощью знака равно (который еще называют оператором присваивания) можно присвоить переменной какое-либо значение

var income = 300;
let price = 76;

/* Процесс присвоения переменной начального значения называется инициализацией.
Теперь переменная income будет хранить число 300, аипеременная price - число 76.

Отличительной чертой переменных является то, что мы можем изменить их значение:
*/
var income = 300;
income = 400;
console.log(income);

// let price = 76;
price = 54;
console.log(price);

var $_for = "var $for - ('for' for var with a $ sign)";
console.log($_for);
