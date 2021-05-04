let firstArray = [];
// console.log(typeof firstArray);
firstArray = [123n, undefined, null, Symbol('Bio')];

firstArray.push(prompt('Введите слово'));
firstArray.push(+prompt('Введите число'));
firstArray.push(confirm('Do you conrirm?'));
firstArray.push({age:+prompt('enter the age'), name:prompt('enter the name')});
console.log(firstArray);