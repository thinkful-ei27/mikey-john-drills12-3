

function createGreeting(name, age){
    const yearOfBirth= new Date().getFullYear() - age;
   return `Hi my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}`;
}

console.log(createGreeting('john', 30));

