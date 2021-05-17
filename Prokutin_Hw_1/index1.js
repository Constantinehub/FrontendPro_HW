let a = prompt('Введите number:');
let b = prompt('Введите string:');
let c = prompt('Выберите одно из математических действий: Сложение, Вычитание.');
let objects = [10n, true, null, undefined];
let total = [];

function actionA(a,b){
    a = Number(a + b);
    let total = objects.push(a, b);
    console.log (objects);
}
function actionB(a,b){
    a = Number(a - b);
    let total = objects.push(a, b);
    console.log (objects);
}

if (c === 'Сложение') {
    actionA(a,b);
} else if (c === 'Вычитание') {
    actionB(a,b);
}