// Логические операции
/*
Логические операции применяются для объединения результатов двух операций сравнения. В JavaScript есть следующие логические операции:

    operator && AND
------------------------------------------------------------------
Возвращает 'true', если обе операции сравнения возвращают 'true', иначе возвращает 'false': &&
*/
var commentStart = '=============================';
var commentEnd = '-----------------------------';
console.log(commentStart);
console.log('   opreator && (AND)');
console.log(commentEnd);
console.log('Example');
var income = 100;
var percent = 10;
var result = income > 90 && percent < 11;
console.log(result + ' - income && percent'); //true

console.log(commentStart);
console.log('Exercise 1');
var workPerMonth = 2;
var hoursPerClass = 6;
var hourlyPayment = 100;

var paymentPerDay = hoursPerClass * hourlyPayment;
var totalSalay = paymentPerDay * workPerMonth;
console.log(totalSalay + ' - total amounty of salary.');

var result = paymentPerDay > 550 && totalSalay < 1500;
console.log(result + ' - payment per day && total salary.'); // true

console.log(commentEnd);
console.log('Exercise 2');
var transport = 32; // both ways
var foodPerWeek = 200; // minimum
var totalWeex = 4;
var spentPerWeek = transport + foodPerWeek;
var myBudget = spentPerWeek * totalWeex;
var totalBudget = foodPerWeek < 250 && transport < 32;

console.log(myBudget + ' - minimal spendings.');
console.log(totalBudget + ' - food per week && transport.');
console.log(commentStart + ' \n');

/*
Возвращает 'true', если хотя бы одна операция сравнения возвращают 'true', иначе возвращает 'false': ||
*/
console.log('   opreator || (OR)');
console.log(commentStart);
console.log('Example');
var income = 100;
var isDeposit = true;
var result = income > 90 || isDeposit == true;
console.log(result + ' - income || isDeposit'); //true
console.log(commentEnd);

console.log('Exercise 1');
var workPerMonth = 2;
var hoursPerClass = 6;
var hourlyPayment = 100;

var paymentPerDay = hoursPerClass * hourlyPayment;
var paymentPerMonth = paymentPerDay * workPerMonth;
var totalSalay = true;
var result = paymentPerMonth > 1000 || totalSalay == true;
console.log(result + ' - payment per month || total salary'); // true
console.log(commentEnd + ' \n');
/* 
    operator ! NOT
------------------------------------------------------------------
Возвращает 'true', если операция сравнения возвращает 'false': !
*/
console.log('   operator ! (NOT)');
console.log(commentStart);
console.log('Example');

var income = 100;
var result1 = !(income > 50);
console.log(result1); // 'false', так как income > 50 возвращает 'true'

console.log(commentEnd);
console.log('Exercise 1');
var monthlyBudget = 2000;
var spent = !(monthlyBudget > 1800);
console.log('monthly budget spent - ' + spent);

console.log(commentStart);
console.log('Example');
var isDeposit = false;
var result2 = !isDeposit;
console.log(result2); // true

console.log(commentEnd);
console.log('Exercise 2');
var monthlyBudget = false;
var spent = !monthlyBudget;
console.log('monthly budget spent - ' + spent);

console.log(commentStart);
