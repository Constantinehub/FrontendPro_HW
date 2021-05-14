/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.
#
Вопрос: Первым операндом должен быть добавляемый тип. 
Это значит, что пользователь непосредственно вводит слово типа "Number,
 String, Boolean", или он вводит что угодно, 
 а мы потом выполняем операции над ним?
И второе, "вторым экшен для преобразования" - то есть во втором 
промпте пользователь должен ввести действие?? ввести слово типа 
"добавить, удалить"?? не совсем могу понять условие.....

Ответ: Первый операнд подразумевает под собой данные например - «1234». 
Суть задачи чтобы вы вводили определенные данные и обрабатывали 
их определенной функцией (в моем описании это «экшен») 
*/


let arr = [];
let currentMonth = String (prompt('Current Month?', 'May'));
console.log(typeof currentMonth);
let currentYear = Number (prompt('Сurrent Year?', 2021));
console.log(typeof currentYear);
let myName = {
    a: prompt('Your name?', 'Yana'),
    b: prompt('Your Last name?', 'Shevchenko'),
};
alert('Your name is' + ' ' + myName.a + ' ' + myName.b);
console.log(typeof myName);
let mySymb = Symbol (prompt('Write any symbol', '*'));
console.log(typeof mySymb);
let field =  Boolean (prompt('Leave the field empty', ' '));
console.log(typeof field);
let serialNum =  BigInt (prompt('Enter numbers from 1 to 15', 123456789101112131415));
console.log(typeof serialNum);
let season = prompt('It is summer now? (if not, click cancel!)');
console.log(typeof season);
let myMood 
    prompt('How is your mood?', 'Very good');
console.log(typeof myMood);

arr.push(currentMonth, currentYear, myName, mySymb, field, serialNum, season, myMood);
console.log(arr);


// # 2) Написать скрипт который будет выполнять математические операции
// # - спрашиваем у пользователя 3 операнда (3 промта).
// # - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
// #   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
// #   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
// #   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
// # - использовать if else или switch case для вызова необходимой функции. 


let a = prompt('Enter the first value of the number');
let b = prompt('Enter the second value of the number');
let operation = prompt('How to make the calculation? (option: +, -, *, /, %)');

function func1(a, b) {
    let result = Number(a) + Number(b);
    console.log('Addition result: ' + result)
};
function func2(a, b) {
    let result = Number(a) - Number(b);
    console.log('Результат вычитания: ' + result)
};
function func3(a, b) {
    let result = Number(a) * Number(b);
    console.log('Subtraction result: ' + result)
};
function func4(a, b) {
    let result = Number(a) / Number(b);
    console.log('Division result: ' + result)
};
function func5(a, b) {
    let result = Number(a) % Number(b);
    console.log('Modulo result: ' + result)
};

if (operation == '+') {
    func1(a, b)
}
if (operation == '-') {
    func2(a, b);
}
if (operation == '*') {
    func3(a, b);
}
if (operation == '/') {
    func4(a, b);
}
if (operation == '%') {
    func5(a, b);
}





