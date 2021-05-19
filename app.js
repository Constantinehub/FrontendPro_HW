/*
2) Написать скрипт который будет выполнять математические операции
 - спрашиваем у пользователя 3 операнда (3 промта).
 - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
  где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
  это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
 - использовать if else или switch case для вызова необходимой функции. 
*/

function plus (a, b) {
    let result = a + b;
    console.log( 'Результат сложения ' + 'a' +  '+' + 'b' + ' = ' + result );
}


function minus (a, b) {
    let result = a - b;
    console.log( 'Результат вычитания ' + 'a' +  '-' + 'b' + ' = ' + result );
}


function multiply (a, b) {
    let result = a * b;
    console.log( 'Результат умножения ' + 'a' +  '*' + 'b' + ' = ' + result );
}


function divide (a, b) {
    let result = a / b;
    console.log( 'Результат деления ' + 'a' +  '/' + 'b' + ' = ' + result );
}


function divideRemainder (a, b) {
    let result = a % b;
    console.log( 'Результат остатка от деления ' + 'a' +  '/' + 'b' + ' = ' + result );
}


let a = +prompt( 'Введите значение a...' );

let b = +prompt( 'Введите значение b...' );

let operations = prompt( 'Выберите математическую операцию: сложение(+), вычитание(-), умножение(*), деление(/), деление по модулю(%)' );

console.log ('a = ' + a + ';' + ' b = ' + b);

switch (operations) {

    case plus (a, b) :
        console.log (plus (a, b));
        break;

    case minus (a, b) :
        console.log (minus (a, b));
        break;

    case multiply (a, b) :
        console.log (minus (a, b));
        break;

    case divide (a, b) :
        console.log (minus (a, b));
        break;

    case divideRemainder (a, b) :
        console.log (minus (a, b));
        break;

        default:
};

// if (operations == 'сложение' || operations == '+') {
//     console.log(plus(a, b));

// } else if (operations == 'вычитание' || operations == '-') {
//     console.log(minus(a, b));

// } else if (operations == 'умножение' || operations == '*') {
//     console.log(multiply(a, b));

// } else if (operations == 'деление' || operations == '/') {
//     console.log(divide(a, b));

// } else if (operations == 'деление по модулю' || operations == '%') {
//     console.log(divideRemainder(a, b));
// };

// switch (operations) {
//     case 'сложение(+)':
//         plus(a, b);
//         break;
    
//     case 'вычитание(-)':
//         minus(a, b);
//         break;

//     case 'умножение(*)':
//         multiply(a, b);
//         break;

//     case 'деление(/)':
//         divide(a, b);
//         break;

//     case 'деление по модулю(%)':
//         divideRemainder(a, b);
//         break;

//     default:
// }
// console.log (a, b, plus(a, b), minus(a, b), multiply(a, b), divide(a, b), divideRemainder(a, b));



/*
1) Создать массив содержащий все типы данных которые мы изучили
 - спрашиваем у пользователя 2 операнда (2 промта).
 - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
 - добавляем готовый результат в массив.
 - в конце всех операций выводим получившийся массив в консоль.
 - массив должен содержать все 8 типов данных JavaScript.
*/

let arr = [54, 314n, 'Hello', true, null, undefined, Symbol('Water')];


let firstQ = prompt('What is your name?');
arr.push({name: (String(firstQ))});

let secondQ = +prompt('How old are you?');
arr.push({age: (String(secondQ))});

console.log(arr);


