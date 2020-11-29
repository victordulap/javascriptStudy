/*
    Массивы (Arrays)
============================================*/
var myArray = new Array();

// Существует также более короткий способ инициализации массива:

// var myArray = [];

// В данном случае мы создаем пустой массив. Но можно также добавить в него начальные данные:

var people = ["Tom", "Alice", "Sam"];
console.log(people);

/*
В этом случае в массиве 'myArray' будет три элемента. Графически его можно представить так:

Индекс |Элемент
----------------
0	   |Tom
1	   |Alice
2	   |Sam
----------------

Для обращения к отдельным элементам массива используются индексы. Отсчет начинается с нуля, то есть первый элемент будет иметь индекс 0, а последний - 2:
*/
var people = ["Tom", "Alice", "Sam"];
console.log(people[0]); // Tom

var person3 = people[2]; // Sam
console.log(person3); // Sam
