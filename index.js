/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.*/
let arr = [12, null, undefined, {key: 'value'}, [1, 123, 34], 1234567891234567n];
let  person =prompt('Твоё имя', "Name");
if (person !== null ) {
    alert("Hello " + person + "!");
}
let band = prompt('Is your favorite band Scorpio?(true or false)', true);
if (band.toLowerCase() !== false) {
    alert("Wow! I'm a too!");
} else {
    alert("It's okay that we have different tastes :)");
}
let changes = prompt('"conversion"', "conversion" )
function conversion(person, band){
    arr.push(person, Boolean(band),);
}
if(changes=== 'conversion')
{conversion(person, band)}

console.log(arr);

/*# 2) Написать скрипт который будет выполнять математические операции
# - спрашиваем у пользователя 3 операнда (3 промта).
# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
#   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
#   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст.
# - использовать if else или switch case для вызова необходимой функции.
*/
let num1 = prompt('Enter first number:');
num1 = Number(num1);
let num2 = prompt('Enter second number:');
num2 = Number(num2);
let operator = prompt('Mathematical action: (/, +, *, -, %)');

switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '%':
        console.log(num1 % num2);
        break;
     }
