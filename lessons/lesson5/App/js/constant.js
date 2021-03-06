/*  JS Constant
------------------------------------------------------------------
С помощью ключевого слова const можно определить константу, которая, как и переменная, хранит значение, однако это значение не может быть изменено.
*/
const rate = 10;

// Если мы попробуем изменить ее значение, то мы столкнемся с ошибкой:

// const rate = 10;
rate = 23;  // ошибка, rate - константа, поэтому мы не можем изменить ее значение

/*
Также стоит отметить, что поскольку мы не можем изменить значение константы, то она должна быть инициализирована, то есть при ее определении мы должны предоставить ей начальное значение. Если мы этого не сделаем, то опять же мы столкнемся с ошибкой:
*/
const rate; // ошибка, rate не инициализирована
