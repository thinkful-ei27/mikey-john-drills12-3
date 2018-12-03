'use strict';

function yearOfBirth(age){
if (age < 1){ throw new Error('Age cannot be negative')};
return new Date().getFullYear() - age;

}

function createGreeting(name, age){
    if (name === undefined || age === undefined) {
        throw new Error('Arguments not valid');
    }
    if (typeof age !== 'number') {
        throw new TypeError('Not a number, please enter a number');
    }

    if (typeof name !== 'string') {
        throw new TypeError('Not a string. Enter a correct string');
    }
    return `Hi my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth(age)}`;
}
try{
    console.log(createGreeting(42, 42));
 }
catch(e){ 
    console.log(e.message);
}
