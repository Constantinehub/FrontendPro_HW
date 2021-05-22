let a = prompt('Введите число:');
let b = prompt('Введите второе число');
let c = prompt('Введите математическое действие');
let x;

function functionPlus(a,b) {
     x = (a+b);
}
function functionMinus(a,b) {
     x = (a-b);
}
function functionDevide(a,b) {
     x = (a/b);
}
function functionMultiply(a,b) {
     x = (a*b);
}
function functionModul(a,b) {
     x = (a%b);
}

if (c === '+'){
    functionPlus(a,b);
}
else if (c === '-'){
    functionMinus(a,b);
}
else if (c === '/'){
    functionDevide(a,b);
}
else if (c === '*'){
    functionMultiply(a,b);
}
else if (c === '%'){
    functionModul(a,b);
}

console.log (a, c, b, '=', x);