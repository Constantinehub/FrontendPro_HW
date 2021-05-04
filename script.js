let firstArray = [];
// console.log(typeof firstArray);
firstArray = [98, 'Terve kaikille', false, 123n, undefined, null, {age:18, height:163, sex:'female'}, Symbol('Bio')];

firstArray.push(+prompt('Введите число'));
firstArray.push(String(firstArray[8]));
console.log(firstArray);