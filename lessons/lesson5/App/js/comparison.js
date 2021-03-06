/*
Все операторы довольно просты, наверное, за исключением оператора равенства и оператора тождественности. Они оба сравнивают два значения, но оператор тождественности также принимает во внимание и тип значения.
----------------------------------------------------------
*/

var income = 100;
var strIncome = "100";
var result = income == strIncome;
console.log(result); //true

/*
Переменная result здесь будет равна true, так как фактически и income, и strIncome представляют число 100.

Но оператор тождественности возвратит в этом случае false, так как данные имеют разные тип:
----------------------------------------------------------*/

var income = 100;
var strIncome = "100";
var result = income === strIncome;
console.log(result); // false
/*  &&
-----------------------------------------------------------
Возвращает true, если обе операции сравнения возвращают true, иначе возвращает false:
=========================================================*/
/*  ||
----------------------------------------------------------
Возвращает true, если хотя бы одна операция сравнения возвращают true, иначе возвращает false:
========================================================*/
var income = 100;
var isDeposit = true;
var result = income > 50 || isDeposit == true;
console.log(result); //true


/*  !
----------------------------------------------------------
Возвращает true, если операция сравнения возвращает false:
========================================================*/
var income = 100;
var result1 = !(income > 50);
console.log(result1); // false, так как income > 50 возвращает true
 
var isDeposit = false;
var result2 = !isDeposit;
console.log(result2); // true