const massive = [];
let usersName = prompt('Your name?');
let usersNickName = prompt('Your nickname?');
let usersAge = prompt('Your age?');
let usersEmail = prompt('Your email?');
let zipCode = prompt('Your zip code?');
let symbol = Symbol(usersNickName);
let obj = {
    a: usersName,
    b: usersAge,
    c: usersEmail,
};
function usersImagination() {
 prompt('Writing something')
};

let usersLocation = prompt('Where you from? (click to cancel!)');

massive.push(usersName, symbol, Number(usersAge), !!usersEmail, BigInt(zipCode), obj, usersImagination(), usersLocation);
console.log(massive);




// let first = prompt('Enter the first number:');
// let second = prompt('Enter the second number:');
// let operation = prompt('What do you want to do?:');
// function func1(first, second) {
//     let result = Number(first) + Number(second);
//     console.log('Результат сложения: ' + result)
// };
// function func2(first, second) {
//     let result = Number(first) - Number(second);
//     console.log('Результат вычитания: ' + result)
// };
// function func3(first, second) {
//     let result = Number(first) * Number(second);
//     console.log('Результат умножения: ' + result)
// };
// function func4(first, second) {
//     let result = Number(first) / Number(second);
//     console.log('Результат деления: ' + result)
// };
// function func5(first, second) {
//     let result = Number(first) % Number(second);
//     console.log('Результат деления по модулю: ' + result)
// };

// if (operation == '+' || operation == 'plus') {
//     func1(first, second)
// }

// if (operation == '-' || operation == 'minus') {
//     func2(first, second);
// }

// if (operation == '*' || operation == 'multiply') {
//     func3(first, second);
// }

// if (operation == '/' || operation == 'devide') {
//     func4(first, second);
// }

// if (operation == '%' || operation == 'module') {
//     func5(first, second);
// }


