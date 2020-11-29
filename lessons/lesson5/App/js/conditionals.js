/*
Условные конструкции
=============================================
Условные конструкции позволяют выполнить те или иные действия в зависимости от определенных условий.

Выражение if
----------------
Конструкция if проверяет некоторое условие и если это условие верно, то выполняет некоторые действия. Общая форма конструкции if:

if(условие) действия;
*/

var income = 100;
if(income > 50) alert("доход больше 50");

/*
Здесь в конструкции if используется следующее условие: income > 50. Если это условие возвращает true, то есть переменная income имеет значение больше 50, то браузер отображает сообщение. Если же значение income меньше 50, то никакого сообщения не отображается.

Если необходимо выполнить по условию набор инструкций, то они помещаются в блок из фигурных скобок:
*/

var income = 100;
if(income > 50){
 
    var message = "доход больше 50";
    alert(message);
}

// Также условия могут быть сложными:

var income = 100;
var age = 19;
if(income < 150 && age > 18){
 
    var message = "доход больше 50";
    alert(message);
}

/* Конструкция if позволяет проверить наличие значения. Например:

var myVar = 89;
if(myVar){
    // действия
}

Если переменная myVar имеет значение, то в условной конструкции она возвратит значение true.

Но нередко для проверки значения переменной используют альтернативный вариант - проверяют на значение undefined:

if (typeof myVar != "undefined") {
    // действия
}

В конструкции if мы также можем использовать блок else. Данный блок содержит инструкции, которые выполняются, если условие после if ложно, то есть равно false:
*/
var age = 17;
if(age >= 18){
 
    alert("Вы допущены к программе кредитования");
}
else{
    alert("Вы не можете участвовать в программе, так как возраст меньше 18");
}

// С помощью конструкции else if мы можем добавить альтернативное условие к блоку if:

var income = 300;
if(income < 200){
 
    alert("Доход ниже среднего");
}
else if(income >= 200 && income <= 400){
     
    alert("Средний доход");
}
else{
     
    alert("Доход выше среднего");
}

// При необходимости мы можем использовать несколько блоков else if с разными условиями:

if(income < 200){
 
    alert("Доход ниже среднего");
}
else if(income>=200 && income<300){
     
    alert("Чуть ниже среднего");
}
else if(income>=300 && income<400){
     
    alert("Средний доход");
}
else{
    alert("Доход выше среднего");
