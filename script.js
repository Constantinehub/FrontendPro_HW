//the data given to us by the condition.

const data = [
    null,
    undefined,
    false,
    'string',
    0,
    9999999999999999n,
    Symbol('id'),
    { itIsObject: true },
    [0, 11, 22, 33],
];




//the first task

// for (let i = 0; i < data.length; i++) {
//     if (!data[i]){
//         console.log(`${data[i]}, index - ${i}`);
//     }
// }


//the second task

// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "object"){
//         console.log(data[i]+ ` , index - ${i}`);
//     }
// }


//data for the third task

let personInfo = {
    firstName: null,
    surName: null,
    sex: null,
    age: null,
    weight: null,
    height: null,
    isMarried: null,
    hasChildren: null,
}

// the third task

personInfo.firstName = prompt('Please enter thy first name');
personInfo.surName = prompt('Please enter thy last name');
personInfo.sex = prompt('Please enter thy sex');
personInfo.age = +prompt('How old art thou?');
personInfo.weight = +prompt('what is thy weight?');
personInfo.height = +prompt('how tall art thou?');
personInfo.isMarried = confirm('Dost thou have a spouse?');
personInfo.hasChildren = confirm('Dost thou have children?');

console.log(personInfo);