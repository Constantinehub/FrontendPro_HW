/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.
#
# 2) Написать скрипт который будет выполнять математические операции
# - спрашиваем у пользователя 3 операнда (3 промта).
# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
#   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
#   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
# - использовать if else или switch case для вызова необходимой функции. 
*/

//Task1

let arr = [];

arr.push(prompt("Write here some string", 'Learning JavaScript'));
arr.push(Number(prompt("Add number here", "54321")));
//arr.push(+prompt("Add number here", "54321")); - another way to 
arr.push(confirm("Adding boolean type. Press 'OK' for 'true' OR 'Cancel' for 'false'"));
arr.push(Symbol(prompt("Adding symbol type.", 'symb')));
/* Checking the way how to display Symbol()
let symbol = Symbol(prompt("Adding symbol type.", 'Id'));
console.log(symbol.toString() + typeof(symbol));
arr.push(symbol);*/
arr.push(BigInt(prompt("Adding bigInt type. Enter a big number", 23456789098765432123456789098765n)));
arr.push(
    {
        name: prompt("Your name", "John"),
        age: +prompt("Age", 20)
    });

let typeNull = null;
let typeUndentified;

arr.push(typeNull);
arr.push(typeUndentified);

console.log("Result array");
console.log(arr);

//To see and check all elements in array and their types
for(let i=0; i<arr.length; i++){
    console.log("Element: ", arr[i], " Type: " + typeof(arr[i]));
    
}


//Task 2

let result;
let a = +prompt("Enter a first number", "6");
/*while (typeof (a) !== 'number') {
    a = +prompt("Not a number! Enter a first number");
}*/

let b = +prompt("Enter a second number", "2");
/*while (typeof (b) !== 'number') {
    b = +prompt("Not a number! Enter a second number");
}*/

let operation = prompt("Enter an operation +, -, *, /, % (or addition, subtraction, multiplication, division, division by module)");

function substraction(a, b) {
    if (confirm("You want to subtract the value from the first number")) {
        result = a - b;
    }
    else {
        result = b - a;
    }
    return result;
}

function division(a, b) {
    if (confirm("Is the first number a dividor?")) {
        result = a / b;
    }
    else {
        result = b / a;
    }
    return result;
}

function divisionByZ(a, b) {
    if (confirm("Is the first number a dividor?")) {
        result = a % b;
    }
    else {
        result = b % a;
    }
    return result;
}

/*
// using switch case

switch (operation) {
    case '+':
        result = a + b;
        break;

    case 'addition':
        result = a + b;
        break;

    case '/':
        division(a, b);
        break;

    case 'division':
        division(a, b);
        break;

    case '-':
        result = substraction(a, b)
        break;

    case "subtraction":
        result = substraction(a, b);
        break;

    case '%':
        divisionByZ(a, b);
        break;

    case 'division by module':
        divisionByZ(a, b);
        break;

    case '*':
        result = a * b;
        break;

    case 'multiplication':
        result = a * b;
        break;

    default:
        result = "Error! You entered wrong operation.";
        break;

}*/


// using if else
if(operation === '+' || operation === 'addition'){
    result = a+b;
}
else if (operation === '*' || operation === 'multiplication'){
    result = a*b;
}
else if (operation === '-' || operation === 'subtraction'){
    result = substraction(a, b);
}
else if (operation === '/' || operation === 'division'){
    result = division(a, b);
    
}
else if (operation == '%' || operation === 'division by module'){
    result = divisionByZ(a, b);
}
else{
    alert("You entered wrong operation. Error.")
}

alert("Answer is: " + result);
console.log("Answer is: " + result);
