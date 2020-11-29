/*
Как правило, для проверки условия используются операторы сравнения. Операторы сравнения сравнивают два значения и возвращают значение 'true' или 'false':

    Оператор равенства:
---------------------------------------------------------------
сравнивает два значения, и если они равны, возвращает 'true', иначе возвращает 'false': x == 5

    Оператор тождественности:
---------------------------------------------------------------
также сравнивает два значения и их тип, и если они равны, возвращает 'true', иначе возвращает 'false': x === 5

Сравнивает два значения, и если они не равны, возвращает 'true', иначе возвращает 'false': x != 5

Сравнивает два значения и их типы, и если они не равны, возвращает 'true', иначе возвращает 'false': x !== 5

Сравнивает два значения, и если первое больше второго, то возвращает 'true', иначе возвращает 'false': x > 5

Сравнивает два значения, и если первое меньше второго, то возвращает 'true', иначе возвращает 'false': x < 5
   
Сравнивает два значения, и если первое больше или равно второму, то возвращает 'true', иначе возвращает 'false': x >= 5

Сравнивает два значения, и если первое меньше или равно второму, то возвращает 'true', иначе возвращает 'false': x <= 5
*/

/*
Все операторы довольно просты, наверное, за исключением оператора равенства и оператора тождественности. Они оба сравнивают два значения, но оператор тождественности также принимает во внимание и тип значения. Например:
*/
var income = 100;
var strIncome = "100";
var result = income == strIncome;
console.log(result); // true

/*
Переменная result здесь будет равна 'true', так как фактически и income, и strIncome представляют число 100.

Но оператор тождественности возвратит в этом случае false, так как данные имеют разные тип:
*/
var income = 100;
var strIncome = "100";
var result = income === strIncome;
console.log(result); // false

// Аналогично работают операторы неравенства != и !==.