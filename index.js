//Задание 1
let MyArray = [];

let famyly =String(prompt('Твоё имя', "Name"));
let  tally = Number(prompt('Сколько тебе лет?', 19));
let  bigNumber= BigInt(prompt('Напиши n число', 200109082001090820010));
let  discreteLogic = Boolean(prompt('Напиши true или false', true));
let  ip= Symbol (prompt('Cоздаем  наш Символ','*'));
let  unknown; prompt('Пиши что хочешь!!!');


let  space = prompt('Нажми отмена!!!',''); 



let  student = 
{
	student_name: prompt('Создаем Объект Студент-имя','Артём'),
	student_group: prompt('Создаем Объект Студенгруппа','ІТІНФ-19-3')
};



alert('Твоё имя ' + famyly +' тебе ' + tally + ' лет'  )
alert('Твоё имя ' + student.student_name + ' ты учишься в группе ' + student.student_group )

MyArray.push(famyly,tally,bigNumber,discreteLogic,space,unknown,student,ip);
//Проверка на тип моих данных
	console.log(MyArray);
	console.log(typeof famyly)
	console.log(typeof tally)
	console.log(typeof bigNumber)
	console.log(typeof discreteLogic)
	console.log(typeof space)
	console.log(typeof unknown)
	console.log(typeof student)
	console.log(typeof ip)

//Попробовал работу с циклами 
for( let i=0; i<=MyArray.length ; ++i)
{
  console.log(i+ '. ' +MyArray[i] + ' ' + typeof MyArray[i]);
}





//Задание 2 


let x =prompt('Выбери чему будет равен твой X', 20);


let y =prompt('Выбери чему будет равен твой Y', 15);


let question =prompt('Какую операцию хотите сделать?(Сложение, Вычитание, Умножение, Деление, Модуль числа','Сложение');



x=Number(x);
y=Number(y);

console.log(typeof x);
console.log(typeof y);
//# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
//#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",

function Addition(x, y) {
   let z= (x + y);
	console.log("Результат " + z);
}
function Subtraction(x, y) {
	let z=(x - y);
	console.log("Результат " + z);
}
function Multiplication(x, y) {
	let z=(x * y);
	console.log("Результат " + z);
}
function Division(x, y) {
	let z=(x / y);
	console.log("Результат " + z);
}
function Modulus_of_a_number(x, y) {
	let z=(x % y);
	console.log("Результат " + z);
}
switch (question){
  case"Сложение": Addition(x, y);
  break
  case"Вычитание": Subtraction(x, y);
  break
  case"Умножение": Multiplication(x, y);
  break
  case"Деление": Division(x, y);
  break
  case"Модуль числа": Modulus_of_a_number(x, y);
  break
} 