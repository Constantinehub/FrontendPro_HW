function adding(a, b) {
    let res = a + b;
    console.log('Результат сложения '+ a + ' и ' + b + " равно " + res );
}
function substracting(a, b) {
    let res = a - b;
    console.log('Результат вычитания '+ a + ' и ' + b + " равно " + res );
}
function dividing(a, b) {
    let res = a / b;
    console.log('Результат деления '+ a + ' и ' + b + " равно " + res );
}
function multiplying(a, b) {
    let res = a * b;
    console.log('Результат умножения '+ a + ' и ' + b + " равно " + res );
}
function remaindering(a, b) {
    let res = a % b;
    console.log('остаток от деления ' + a + " на " + b + " равно " + res);
}

let a = prompt('Введите первый аргумент');
a = +a;
let b = prompt('введите второй аргумент');
b = +b;
let operat = prompt('Что надо сделать: прибавить, отнять, поделить, умножить или найти остаток?');
switch (operat) {
    case 'прибавить':
        adding(a,b);
        break;
    case('отнять'):
        substracting(a, b);
        break;
    case('поделить'):
        dividing(a, b);
        break;
    case('умножить'):
        multiplying(a, b)
        break;
    case('найти остаток'):
        remaindering(a, b);
        break;
    default:
        alert('проверьте написание действия');
}