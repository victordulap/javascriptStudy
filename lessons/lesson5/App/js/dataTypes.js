/*
    Типы данных (Data Types)
------------------------------------------------------------
Все используемые данные в JavaScript имеют определенный тип. В JavaScript имеется пять примитивных типов данных:

- string: представляет строку
- number: представляет числовое значение
- Boolean: представляет логическое значение 'true' или 'false'
- undefined: указывает, что значение не установлено
- null: указывает на неопределенное значение

Все данные, которые не попадают под вышеперечисленные пять типов, относятся к типу 'object'.

/* DATA TYPES:
===============
undefined - the value is not set, yet, 
null - nothing, 
boolean - true or false, 
string - text, 
symbol - a unique value, 
number - number,
object - 


    Числовые данные (Numeric Data)
------------------------------------------------------------
Числа в JavaScript могут иметь две формы:

Целые числа, например, 35. Мы можем использовать как положительные, так и отрицательные числа. Диапазон используемых чисел: от -2\'53 до 2\'53

Дробные числа (числа с плавающей точкой), например, 3.5575. Опять же можно использовать как положительные, так и отрицательные числа. Для чисел с плавающей точкой используется тот же диапазон: от -2\'53 до 2\'53
*/

var range = 'Range of numbers';
const numRange = '2.53';

console.log(range + ' from ' + '-' + numRange + ' to ' + numRange);
var x = 45;
var y = 23.897;

// В качестве разделителя между целой и дробной частями, как и в других языках программирования, используется точка.

/*
    String
-------------------------------------------------------------
    Тип string представляет строки, то есть такие данные, которые заключены в кавычки. 
*/
// Если внутри строки встречаются кавычки, то мы их должны экранировать слэшем. 
var dublLine = '==================================';
var snglLine = '----------------------------------';

console.log(dublLine);
console.log('String');
console.log(snglLine);
var isAStr = ' - is a string';
var companyName = "Бюро \"Рога и копыта\"" + isAStr;
console.log(companyName);
// или внутри стоки использовать другой тип кавычек:
var companyName1 = "Бюро 'Рога и копыта'" + isAStr;
var companyName2 = 'Бюро "Рога и копыта"' + isAStr;
console.log(companyName1);
console.log(companyName2);
console.log();
/*
    Boolean
-------------------------------------------------------------
Тип Boolean представляет булевые или логические значения true и false (то есть да или нет):
*/
var isAlive = true;
var isDead = false;

/*
    null и undefined
-------------------------------------------------------------
Нередко возникает путаница между 'null' и 'undefined'. Итак, когда мы только определяем переменную без присвоения ей начального значения, она представляет тип 'undefined':
*/
console.log('\'null\' и \'undefined\'');
console.log(snglLine);
var isAlive;
console.log(isAlive); // выведет 'undefined'
console.log(snglLine);

/*
Присвоение значение 'null' означает, что переменная имеет некоторое неопределенное значение (не число, не строка, не логическое значение), но все-таки имеет значение ('undefined' означает, что переменная не имеет значения):
*/

var isAlive;
console.log(isAlive); // undefined
isAlive = null;
console.log(isAlive); // null
isAlive = undefined; // снова установим тип undefined
console.log(isAlive); // undefined
console.log(dublLine);

/*
    Объекты (object)
--------------------------------------------------------------
Тип 'object' представляет сложный объект. Простейшее определение объекта представляют фигурные скобки
*/

var user = {};

/*
Объект может иметь различные 
свойства и методы
-----------------------------------------*/
var user = {name: "Tom", age: 24};
console.log(user.name + " - " + user.age);
// console.log(user);
console.log(dublLine);
/*
В данном случае объект называется user, и он имеет два свойства: name и age. Это краткое описание объектов, более подробное описание приводится в соответствующей главе.
*/

/*
    Слабая типизация
--------------------------------------------------------------
JavaScript является языком со слабой типизацией. Это значит, что переменные могут динамически менять тип. Например:
*/
console.log('Слабая типизация');
console.log(snglLine);
var xNumber; // undefined
console.log(xNumber);
xNumber = 45; // number
console.log(xNumber);
xNumber = '55'; // string
console.log(xNumber + isAStr);
console.log(snglLine);

/*
Несмотря на то, что во втором и третьем случае консоль выведет нам число 45, но во втором случае переменная xNumber будет представлять число, а в третьем случае - строку.

Это важный момент, который надо учитывать и от которого зависит поведение переменной в программе:
*/
var a = ' - number';
var xNumber = 45; // number
var yNumber = xNumber + 5;
console.log(yNumber + a); // 50

var b = ' - string';
var xNumber = '55'; // string
var zNumber = xNumber + 10;
console.log(zNumber + b); // 5510
console.log(dublLine);
/*
    Оператор typeof
-------------------------------------------------------------
С помощью оператора 'typeof' можно получить тип переменной:
*/
console.log('Оператор \'typeof\'');
console.log(snglLine);
var name = "Tom";
console.log(typeof name); // string

var income = 45.8;
console.log(typeof income); // number

var isEnabled = true;
console.log(typeof isEnabled); // boolean

var undefVar;
console.log(typeof undefVar); // undefined
console.log(dublLine);
